import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export default function CreateAdd() {
    return (
        <div className='mt-8 pt-1 bg-nlwgradient self-stretch rounded-lg overflow-hidden'>

            <div className='bg-[#2A2634] py-8 px-6 text-white rounded-lg flex justify-between'>
                <div>
                    <h3 className='text-2xl font-black'>Não encontrou seu duo?</h3>
                    <p className='text-zinc'>Publique um anúncio para encontrar novos players!</p>

                </div>
                <Dialog.Trigger className='py-3 px-4 rounded-lg bg-violet-500 hover:bg-violet-600 font-bold flex items-center'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar Anúncio</Dialog.Trigger>
            </div>
        </div>)
}