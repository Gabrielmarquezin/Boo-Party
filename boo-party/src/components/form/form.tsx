import { createContext } from "react";
import { WithLoading } from "../../HOC/withLoading";
import { Input } from "./components/inputs/input";
import { InputFile } from "./components/inputs/input_file";
import { InputSubmit } from "./components/inputs/submit";
import { Qr_Code } from "./components/qr_code";

type TypeContext = {
    isLoading: (status: boolean) => void
}

export const FormContext = createContext<TypeContext>({ isLoading: () => {} });

export const Form = ({isLoading}:any)=>{
   
    return(
       <FormContext.Provider value={{isLoading}}>
         <form className="max-w-[350px] w-full flex flex-col gap-4 p-5 bg-[#ffffff] z-[1]" id="form">
            <Input type="text" id="nome" label="Nome" name="nome" />
            <Qr_Code />
            <InputFile name="file" id="file" label="comprovante ou print" />
            <InputSubmit id="submit" name="submit" value="Enviar"/>
        </form>
       </FormContext.Provider>
    )
}

export const FormWithLoading = WithLoading(Form)