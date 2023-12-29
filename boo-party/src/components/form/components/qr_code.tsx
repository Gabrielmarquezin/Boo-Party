import React from "react";
import qr_code from "../../../assets/img/qr_code.jpg"

export const Qr_Code = ()=>{
    return(
        <div className="flex flex-col">
            <span>Leia o qr_code</span>
            <img src={qr_code} className="w-[225px] h-[225px] self-center"/>
        </div>
    )
}