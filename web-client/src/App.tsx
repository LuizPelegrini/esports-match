import './styles/main.css';
import logoImg from './assets/logo-esports.svg';

import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      <h1 className='text-6xl font-black text-white mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>duo</span> is here.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-1.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-2.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-3.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-4.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-5.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./game-6.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 ads</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 rounded flex justify-between items-center'>
          <div>
            <strong className='text-2xl block text-white font-black'>Have you found your duo?</strong>
            <span className='text-zinc-400 block'>Publish an ad to find new players!</span>
          </div>
          <button className='flex items-center gap-3 rounded text-white px-4 py-3 bg-violet-500 hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24}/>
            Publish Ad
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
