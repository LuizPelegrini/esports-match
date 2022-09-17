import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

import logoImg from './assets/logo-esports.svg';
import './styles/main.css';
import { Input } from './components/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  // initialize game list
  const [games, setGames] = useState<Game[]>([]);

  // useEffect without dependencies runs only once (even if component state changes)
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      
      <h1 className='text-6xl font-black text-white mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>duo</span> is here.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        { 
          games.map(game => 
            <GameCard
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          ) 
        }
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="bg-[#2A2634] py-8 px-10 fixed top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publish an Ad</Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">What's the game?</label>
                <Input 
                  id="game"
                  placeholder="Select the game you wanna play"
                  className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Your name (or nickname)</label>
                <Input id="name" placeholder="What's your nickname" />
              </div>

              <div className="grid grid-cols-2 gap-6 items-end">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying" className="font-semibold">How long you've been playing?</label>
                  <Input id="yearsPlaying" type="number" placeholder="It's alright to be ZERO"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="font-semibold">What's your Discord?</label>
                  <Input id="discord" placeholder="User#0000" />
                </div>
              </div>

              <div className="flex flex-6 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays" className="font-semibold">When do you usually play?</label>
                  <div className="grid grid-cols-5 gap-2">
                    <button title="Sunday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">S</button>
                    <button title="Monday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">M</button>
                    <button title="Tuesday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">T</button>
                    <button title="Wednesday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">W</button>
                    <button title="Thursday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">T</button>
                    <button title="Friday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">F</button>
                    <button title="Saturday" className="w-10 h-10 rounded bg-zinc-900 font-semibold">S</button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="hourStart" className="font-semibold">Which time of the day?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="From"/>
                    <Input id="hourEnd" type="time" placeholder="Until"/>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />I do connect to voice channel
              </div>

              <footer className="mt-4 flex gap-4 justify-end">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 py-3 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancel
                </Dialog.Close>
                <button
                  type="submit"
                  className="flex gap-3 bg-violet-500 items-center px-5 py-3 rounded-md hover:bg-violet-600"
                >
                  <GameController size={24}/>
                  Find duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
