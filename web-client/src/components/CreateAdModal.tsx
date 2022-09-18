import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from './Form/Input';

interface CreateAdModalProps {
  games: {
    id: string;
    title: string;
  }[];
}

export function CreateAdModal ({ games }: CreateAdModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="bg-[#2A2634] py-8 px-10 fixed top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-black/25">
        <Dialog.Title className="text-3xl font-black">Publish an Ad</Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">What's the game?</label>
            <select 
              id="game"
              className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500 appearance-none"
            >
              <option disabled selected value="">Select the game you wanna play</option>
              { games.map(game => <option key={game.id} value={game.id}>{game.title}</option>)}
            </select>
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
              <ToggleGroup.Root type="multiple" className="grid grid-cols-5 gap-2">
                <ToggleGroup.Item value="0" title="Sunday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">S</ToggleGroup.Item>
                <ToggleGroup.Item value="1" title="Monday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">M</ToggleGroup.Item>
                <ToggleGroup.Item value="2" title="Tuesday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">T</ToggleGroup.Item>
                <ToggleGroup.Item value="3" title="Wednesday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">W</ToggleGroup.Item>
                <ToggleGroup.Item value="4" title="Thursday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">T</ToggleGroup.Item>
                <ToggleGroup.Item value="5" title="Friday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">F</ToggleGroup.Item>
                <ToggleGroup.Item value="6" title="Saturday" className="toggle-on:bg-violet-500 toggle-off:bg-zinc-900 font-semibold w-10 h-10 rounded">S</ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="hourStart" className="font-semibold">Which time of the day?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="From"/>
                <Input id="hourEnd" type="time" placeholder="Until"/>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox.Root className="bg-zinc-900 w-6 h-6 p-1 rounded">
              <Checkbox.Indicator className="w-4 h-4 text-emerald-400">
                <Check />
              </Checkbox.Indicator>
            </Checkbox.Root>
            I'd like to connect to voice channel
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
  );
}