import React from "react";

export const Footer = ()=>{
    return(
        <footer className="bg-[#0A0A0A] p-5 w-full">
            <div className="flex justify-around gap-5 [&_a]:text-comum [&_a]:font-inter [&_a]:font-light [&_a]:text-[0.8rem] ">
                <a href="#">feito por: <span className="small-smartphone:hidden">Gabriel Marques</span></a>
                <a href="https://www.linkedin.com/in/gabriel-marques-5922ba262/">Linkedin: <span className="small-smartphone:hidden">Gabriel Marques</span></a>
                <a href="https://github.com/Gabrielmarquezin/Boo-Party-Convite">Github: <span className="small-smartphone:hidden">Gabrielmarquezin</span></a>
                <a href="https://www.instagram.com/gabriel.boring/">instagram: <span className="small-smartphone:hidden">gabriel.boring</span></a>
            </div>
        </footer>
    )
}