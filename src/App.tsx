import './styles/main.css'
import logo from '/logo_nlw.svg'
import GameItem from './components/GameItem'
import { useEffect, useState } from 'react'
import Game from './interfaces/IGame'
import CreateAdd from './components/CreateAdd'
import * as Dialog from '@radix-ui/react-dialog'
import DialogInput from './components/form/Inputs'
import { GameController } from 'phosphor-react'
function App() {

	const [games, setGames] = useState<Array<Game>>([])

	useEffect(() => {
		fetch('http://localhost:3000/games')
			.then(res => res.json())
			.then(data => setGames(data))

	}, [setGames])


	return (
		<div className="max-w-[1344px] mx-auto flex items-center flex-col m-20">
			<img src={logo} alt="" />
			<h1 className='text-6xl text-white font-black m-20'>
				Seu <span className='bg-nlwgradient text-transparent bg-clip-text'>duo</span> está aqui.
			</h1>

			<div className='grid grid-cols-6 gap-6'>
				{games.map(game => <GameItem key={game.id} name={game.title} image={game.bannerUrl} anounces={game._count.ads} />)}

			</div>
			<Dialog.Root>
				<CreateAdd />
				<Dialog.Portal>
					<Dialog.Overlay className='bg-black/60 inset-0 fixed'>
						<Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-lg  shadow-black/60'>
							<Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title>
							<form className='mt-8 flex flex-col gap-4' action="">
								<div className='flex flex-col gap-2'>
									<label htmlFor="game" className='font-semibold'>Qual o game?</label>
									<DialogInput id='game' placeholder='Selecione o que quer jogar' />
								</div>

								<div className='flex flex-col gap-2'>
									<label htmlFor="name" className='font-semibold'>Seu Nickname(Apelido)</label>
									<DialogInput id='name' type="text" placeholder='Como te chamam dentro do jogo?' />
								</div>
								<div className='grid grid-cols-2 gap-6'>

									<div>
										<label htmlFor="timePlaying">Joga a quantos anos?</label>
										<DialogInput id='timePlaying' type="number" placeholder='Não tem problema ser novato' />
									</div>

									<div>
										<label htmlFor="disc">Qual o seu discord?</label>
										<DialogInput id='disc' type="text" placeholder='Usuario#1234' />
									</div>

								</div>
								<div className='flex gap-6'>
									<div className='flex flex-col gap-2'>
										<label htmlFor="days">Dias da Semana</label>
										<div className='grid grid-cols-4 gap-2'>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Domingo'>D</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Segunda'>S</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Terça'>T</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Quarta'>Q</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Quinta'>Q</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Sexta'>S</button>
											<button className='w-8 h-8 rounded-md bg-zinc-900' title='Sábado'>S</button>

										</div>
									</div>
									<div className='flex flex-col gap-2 flex-1'>
										<label htmlFor="hourIn">Qual hora do dia?</label>
										<div className='grid grid-cols-2 gap-2'>
											<DialogInput id='hourIn' type="time" placeholder='19:00' />
											<DialogInput id='hourOut' type="time" placeholder='23:45' />
										</div>
									</div>
								</div>
								<div>
									<DialogInput className='mt-2' type="checkbox" />
									Costumo entrar no chat de voz
								</div>
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
			</Dialog.Root>
		</div>
	)
}

export default App
