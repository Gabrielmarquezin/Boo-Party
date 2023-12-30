import "../../../../styles/animation_input.css"

type PropsInput = {
    type: string,
    placeholder?: string,
    id: string,
    name: string,
    label: string
}

export const Input = ({type, placeholder, id, name, label}:PropsInput)=>{
    return(
        <div className="relative w-full">
            <input className="w-full p-[8px] border-[1px] border-input outline-0" type={type} id={id} name={name} placeholder={placeholder} required />
            <span className="absolute text-label left-[15px] top-1/2 -translate-y-1/2 text-[0.8rem]">{label}</span>
        </div>
    )
}