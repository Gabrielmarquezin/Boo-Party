import Lottie from "lottie-react"
import animationData from "./animation.json";

export const Loading = ()=>{
   
    
    return (
       <div className="relative">
            <Lottie animationData={animationData} />
            <p className="absolute top-[90%] -translate-y-full left-1/2 -translate-x-1/2 text-[#ffffff]">Carregando...</p>
       </div>
    )
}