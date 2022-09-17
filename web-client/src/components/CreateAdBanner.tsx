import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
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
    );
}