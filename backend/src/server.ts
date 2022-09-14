import express from 'express';
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// List games
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    });
    return response.json(games);
});

// List game ads
app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
            weekDays: true,
            yearsPlaying: true
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return response.json(ads.map(ad => ({
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
    })));
});

// Fetch discord from an ad
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    // only discord field
    const discord = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    });

    return response.json(discord);
});

// Create an ad for a game
app.post('/games/:id/ads', async (request, response) => {
    const body = request.body;
    const gameId = request.params.id;

    const ad = await prisma.ad.create({
        data: {
            ...body,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            gameId,
        }
    });

    return response.status(201).json(ad);
});

// Init server
app.listen(3333, () => {
    console.log('Server started at 3333! 🚀');
});