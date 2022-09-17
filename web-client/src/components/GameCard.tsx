interface GameCardProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameCard ({ bannerUrl, title, adsCount }: GameCardProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={bannerUrl} />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 bottom-0 absolute'>
            <strong className='font-bold text-white block'>{title}</strong>
            <span className='text-zinc-300 text-sm block'>{adsCount} ad(s)</span>
          </div>
        </a>
    );
}