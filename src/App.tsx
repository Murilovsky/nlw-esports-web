import './styles/main.css'
import logo from '/logo_nlw.svg'
import GameItem from './components/GameItem'
import { useEffect, useState } from 'react'
import Game from './interfaces/IGame'
import CreateAdd from './components/CreateAdd'
import * as Dialog from '@radix-ui/react-dialog'
import Modal from './components/form/Modal'
import axios from 'axios'
function App() {

	const [games, setGames] = useState<Array<Game>>([])

	useEffect(() => {
		axios('http://localhost:3000/games')
			.then(res => setGames(res.data))

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
				<Modal games={games} />
			</Dialog.Root>
		</div>
	)
}

export default App
