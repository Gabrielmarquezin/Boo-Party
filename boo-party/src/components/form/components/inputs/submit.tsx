import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getLinkFile } from "../../../../utils/link_file";
import { SwalAlert } from "../../../../utils/sweet_alert";
import { FormContext } from "../../form";
import JesusChorou from "../../../../sound/jesuschorou.mp3"

type SubmitProps = {
    name: string,
    id: string,
    value: string
}

type BodyRequest = {
    sheetid: string,
    data: [[string,string]]
}

export const InputSubmit = ({name, id, value} :SubmitProps)=>{
    const navigate = useNavigate()
    const {isLoading} = useContext(FormContext)

    const handleSubmit = async (e: FormEvent)=>{
        e.preventDefault()
        const form = document.getElementById('form') as HTMLFormElement
        const formData = new FormData(form)

        const file = formData.get('file') as File
        const nome = formData.get('nome') as string

        try{
            isLoading(true)
            const link = await getLinkFile(file)
            const data :BodyRequest = {
                sheetid: "1rgiZKv1Ei_RVRBy-peMXlTGegr_HcpneSg3hU5uuU1E",
                data: [[nome, link]]
            }
            const request = await fetch("https://boo-party.vercel.app/sheet/add", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })

            const response = await request.json()
            
            const audio = new Audio(JesusChorou)
            audio.play()

            setTimeout(()=>{
                audio.pause()
            }, 10000)

            if(response.message == "concluido"){
                SwalAlert("Pronto! Agora aguarde o dia chegar", true)
            }
            isLoading(false)

        }catch(error){
            SwalAlert("Algo de errado, fale com a adm para verificar o erro", false)
            isLoading(false)
            console.log(error)
        }
       
    }

    const goBack = ()=>{
        navigate("/")
    }

    return(
        <div className="w-full flex justify-between">
            <input className="focus:border-none outiline-none border-none text-label hover:text-halloween cursor-pointer text-btn" type="button" value={"Cancel"} onClick={goBack}/>
            <input className="hover:opacity-[0.9] cursor-pointer outline-none min-w-[80px] text-btn bg-halloween border-none rounded-[10px] p-2 text-comum" type="submit" name={name} id={id} value={value} onClick={handleSubmit}/>
        </div>
    )
}