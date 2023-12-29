import React from "react";
import { FormWithLoading } from "../components/form/form";


export const Confirmation = ()=>{
    return(
        <div className="flex justify-center items-center w-full h-full bg-custom-gradient">
            <div className="tablet:w-[80%] w-[350px] flex justify-center items-center">
                <FormWithLoading />
            </div>
        </div>
    )
}