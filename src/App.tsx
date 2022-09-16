import './styles/main.css'
import logo from './assets/logo_nlw.svg'
import GameItem from './components/GameItem'
import { MagnifyingGlassPlus } from 'phosphor-react'
function App() {

	return (
		<div className="max-w-[1344px] mx-auto flex items-center flex-col m-20">
			<img src={logo} alt="" />
			<h1 className='text-6xl text-white font-black m-20'>
				Seu <span className='bg-nlwgradient text-transparent bg-clip-text'>duo</span> está aqui.
			</h1>

			<div className='grid grid-cols-6 gap-6'>

				<GameItem name='League of Legends' image='/jogos/jogo1.png' anounces={4} />
				<GameItem name='Dota 2' image='/jogos/jogo2.png' anounces={2} />
				<GameItem name='Counter Strike' image='/jogos/jogo3.png' anounces={3} />
				<GameItem name='Apex Legends' image='/jogos/jogo4.png' anounces={1} />
				<GameItem name='League of Legends' image='/jogos/jogo5.png' anounces={7} />
				<GameItem name='World of Warcraft' image='/jogos/jogo6.png' anounces={8} />

			</div>

			<div className='mt-8 pt-1 bg-nlwgradient self-stretch rounded-lg overflow-hidden'>

				<div className='bg-[#2A2634] py-8 px-6 text-white rounded-lg flex justify-between'>
					<div>
						<h3 className='text-2xl font-black'>Não encontrou seu duo?</h3>
						<p className='text-zinc'>Publique um anúncio para encontrar novos players!</p>

					</div>
					<button className='py-3 px-4 rounded-lg bg-purple-500 hover:bg-purple-400 font-bold flex items-center'>
						<MagnifyingGlassPlus size={24}/>
						Publicar Anúncio</button>
				</div>
			</div>
		</div>
	)
}

export default App
