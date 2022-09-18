import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as Select from '@radix-ui/react-select'
import { Check, GameController } from 'phosphor-react'
import DialogInput from './Inputs'
import Game from '../../interfaces/IGame'
import { useState, FormEvent } from 'react'
import axios from 'axios'

interface Props {
   games: Array<Game>
}

export default function Modal({ games }: Props) {

   const [weekdays, setWeekdays] = useState<string[]>([])
   const [voice, setVoice] = useState<boolean>(false)
   const [gameChosen, setGameChosen] = useState<string>('')

   async function CriaDuoReq(event: FormEvent) {
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)
      const data = Object.fromEntries(formData)

      try {
         axios.post(`http://localhost:3000/games/${gameChosen}/ads`, {
            "name": data.name,
            "timePlaying": Number(data.timePlaying),
            "hourIn": data.hourIn,
            "hourOut": data.hourOut,
            "disc": data.disc,
            "voice": voice,
            "days": weekdays.join(',')
         })
         alert('Anuncio Criado!')
      } catch (error) {
         alert()
      }
   }

   return (
      <Dialog.Portal>
         <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-lg  shadow-black/60'>
               <Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title>
               <form onSubmit={CriaDuoReq} className='mt-8 flex flex-col gap-4' action="">
                  <div className='flex flex-col gap-2'>
                     <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                     <Select.Root value={gameChosen} onValueChange={setGameChosen} >
                        <Select.Trigger className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded-md flex justify-between'>
                           <Select.Value placeholder="Selecione o que quer jogar" />
                           <Select.Icon />
                        </Select.Trigger>

                        <Select.Portal className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded-md'>
                           <Select.Content >
                              <Select.ScrollUpButton />
                              <Select.Viewport >

                                 {games.map(game => (
                                    <Select.Item key={game.id} value={game.id} className='text-white m-1 font-semibold'>
                                       <Select.ItemText>{game.title}</Select.ItemText>
                                       <Select.ItemIndicator />
                                    </Select.Item>
                                 ))}

                              </Select.Viewport>
                              <Select.ScrollDownButton />
                           </Select.Content>
                        </Select.Portal>
                     </Select.Root>

                  </div>

                  <div className='flex flex-col gap-2'>
                     <label htmlFor="name" className='font-semibold'>Seu Nickname(Apelido)</label>
                     <DialogInput name='name' id='name' type="text" placeholder='Como te chamam dentro do jogo?' />
                  </div>
                  <div className='grid grid-cols-2 gap-6'>

                     <div>
                        <label htmlFor="timePlaying">Joga a quantos anos?</label>
                        <DialogInput name='timePlaying' id='timePlaying' type="number" placeholder='Não tem problema ser novato' />
                     </div>

                     <div>
                        <label htmlFor="disc">Qual o seu discord?</label>
                        <DialogInput name='disc' id='disc' type="text" placeholder='Usuario#1234' />
                     </div>

                  </div>
                  <div className='flex gap-6'>
                     <div className='flex flex-col gap-2'>
                        <label htmlFor="days">Dias da Semana</label>
                        <ToggleGroup.Root type='multiple' className='grid grid-cols-4 gap-3' value={weekdays} onValueChange={setWeekdays}>

                           <ToggleGroup.Item value='0' className={`w-8 h-8 rounded-md  ${weekdays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Domingo'>D</ToggleGroup.Item>
                           <ToggleGroup.Item value='1' className={`w-8 h-8 rounded-md  ${weekdays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Segunda'>S</ToggleGroup.Item>
                           <ToggleGroup.Item value='2' className={`w-8 h-8 rounded-md  ${weekdays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Terça'>T</ToggleGroup.Item>
                           <ToggleGroup.Item value='3' className={`w-8 h-8 rounded-md  ${weekdays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Quarta'>Q</ToggleGroup.Item>
                           <ToggleGroup.Item value='4' className={`w-8 h-8 rounded-md  ${weekdays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Quinta'>Q</ToggleGroup.Item>
                           <ToggleGroup.Item value='5' className={`w-8 h-8 rounded-md  ${weekdays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Sexta'>S</ToggleGroup.Item>
                           <ToggleGroup.Item value='6' className={`w-8 h-8 rounded-md  ${weekdays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Sábado'>S</ToggleGroup.Item>
                        </ToggleGroup.Root>

                     </div>
                     <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="hourIn">Qual hora do dia?</label>
                        <div className='grid grid-cols-2 gap-2'>
                           <DialogInput name='hourIn' id='hourIn' type="time" placeholder='19:00' />
                           <DialogInput name='hourOut' id='hourOut' type="time" placeholder='23:45' />
                        </div>
                     </div>
                  </div>
                  <label className='mt-2 flex gap-2 text-sm'>
                     <Checkbox.Root checked={voice} onCheckedChange={(checked) => { checked == true ? setVoice(true) : setVoice(false) }} className='w-6 h-6 p-1 rounded bg-zinc-900'>
                        <Checkbox.Indicator>
                           <Check className='w-4 h-4 text-emerald-400' />
                        </Checkbox.Indicator>
                     </Checkbox.Root>
                     Costumo entrar no chat de voz
                  </label>
                  <footer className='flex justify-end mt-4 gap-4'>
                     <Dialog.Close className='font-semibold rounded-md bg-zinc-500 px-5 h-12 hover:bg-zinc-600 '>Cancelar</Dialog.Close>
                     <button type='submit' className='flex flex-row gap-2 rounded-md bg-violet-500 px-5 h-12 items-center hover:bg-violet-600'>
                        <GameController size={24} />
                        Encontrar duo</button>
                  </footer>
               </form>

            </Dialog.Content>
         </Dialog.Overlay>
      </Dialog.Portal>
   )
}