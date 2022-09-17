import InputProps from "../../interfaces/IInputs";

export default function DialogInput(props: InputProps) {
    return (

        <input {...props} className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded-md' />)
}