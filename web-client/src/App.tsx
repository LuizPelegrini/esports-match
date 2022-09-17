import './styles/main.css';
import logoImg from './assets/logo-esports.svg';

import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      
      <h1 className='text-6xl font-black text-white mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>duo</span> is here.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameCard bannerUrl='./game-1.png' title='League of Legends' adsCount={3}/>
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
