function GameItem(props:any){
    const image:string = props.image;
    const name:string = props.name; 
    const anounces:number = props.anounces;  
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
					<img src={image} alt={name} />
					<div className='w-full pt-16 pb-4 px-4 bg-gamegradient absolute bottom-0 right-0 left-0'>
						<strong className='font-bold text-white'>{name}</strong>
						<span className='text-zinc-300 text-sm block'>{anounces} {anounces > 1?'Anúncios':'Anúncio'}</span>
					</div>
				</a>
    )
}
export default GameItem