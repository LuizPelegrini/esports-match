import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import logoImg from './assets/logo-esports.svg';
import './styles/main.css';

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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
