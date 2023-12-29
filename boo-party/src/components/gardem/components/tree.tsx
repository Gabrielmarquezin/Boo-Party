import React from "react";
import arvore from "../../../assets/img/arvore.svg"
import small_arvore from "../../../assets/img/small_arvore.svg"
import hand from "../../../assets/img/hand.svg"

type PropsTree = {
    className?: string;
}
export const Tree: React.FC<PropsTree> = ({className})=>{
    return(
        <div className={`flex items-end gap-20 pl-[30px] h-[110px] tablet:hidden ${className}`}>
            <div className="flex items-end h-full">
                <img src={arvore} className="h-full"/>
                <img src={hand} className="-translate-1/2 max-h-[40px]"/>
            </div>
            <img src={small_arvore} className="h-full"/>
        </div>
    )
}