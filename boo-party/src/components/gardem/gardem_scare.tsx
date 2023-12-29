import React from "react";
import gardem from "../../assets/img/gardem.svg";
import { HouseMoon } from "./components/house_moon";
import { Tree } from "./components/tree";


export const Gardem = ()=>{
    return(
        <div className="relative">
            <div className="absolute w-full flex justify-between items-end top-[35%] -translate-y-full gap-2 z-[-1]">
                <Tree />
                <div>
                    <HouseMoon />
                </div>
            </div>
            <img src={gardem} className="w-full"/>
        </div>
    )
}