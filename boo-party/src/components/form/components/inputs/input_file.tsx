import React, { DOMElement, useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineFilePdf, AiOutlineClose} from "react-icons/ai";

type InputProps = {
    id: string,
    name: string,
    label: string
}

export const InputFile = ({id, name, label}:InputProps)=>{
    const [file, setFile] = useState(0)

    const pictureText = "upload pdf"
    const span_text :React.MutableRefObject<HTMLSpanElement | null> = useRef(null)

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const inputTarget :FileList | null = (e.target as HTMLInputElement).files
        
        if(inputTarget && inputTarget.length > 0){
            setFile(inputTarget.length)
            if(span_text.current){
                span_text.current.innerHTML = ''

                let file :File = inputTarget[0]
                let size :string = (file.size / 1000).toFixed(2)
                let name:string = file.name
    
                const span_name_file = document.createElement('span')
                span_name_file.innerHTML = name
                span_name_file.style.fontSize = '0.8rem'
                span_name_file.style.color = "#000000e4"
    
                const span_size_file = document.createElement('span')
                span_size_file.innerHTML = size + 'KB'
                span_size_file.style.fontSize = '0.8rem'

                span_text.current.appendChild(span_name_file)
                span_text.current.appendChild(span_size_file)

            }
        }else{
            setFile(0)
            if(span_text.current){
                span_text.current.innerHTML = pictureText
            }
        }
    }

    const CloseFile = (e :React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation()
        if(span_text.current){
            setFile(0)
            span_text.current.innerHTML = pictureText
        }
    }

    return(
        <div className="w-full">
            <label className="flex items-center gap-3 border-input border-[1px] p-[5px] text-[0.8rem] text-label cursor-pointer" htmlFor={id}>
                {
                    file <= 0 
                        ? <FaCloudUploadAlt className="text-[#399cdc] text-[2rem]"/>
                        : <AiOutlineFilePdf className="text-[red] text-[2rem]" />
                }
                <span className="flex flex-col" ref={span_text}>{label}</span>
                {file > 0 && <AiOutlineClose className="cursor-pointer text-label text-[2rem] ml-auto" onClick={CloseFile}/>}
            </label>
            <input className="hidden" type="file" id={id} name={name} onChange={hanldeChange} required/>
        </div>
    )
}