import React from "react";
import { Title } from "../components/text/title";
import teia from "../assets/img/teia.svg";
import { Menu } from "../components/menu/menu";
import { useNavigate } from "react-router-dom";
import gardem from "../assets/img/gardem.svg";
import { Tree } from "../components/gardem/components/tree";
import { HouseMoon } from "../components/gardem/components/house_moon";

export const Home: React.FC = ()=>{
    const navigate = useNavigate()

    const handleNavigate = ()=>{
      navigate('confimation_participation')
    }
    return(
        <header className="relative flex flex-col bg-custom-gradient h-full w-full">
          <div className="w-full flex justify-end pr-[50px] tablet:hidden">
            <Menu />
          </div>

          <img src={teia} className="absolute top-0 w-[200px]" />

          <div className="flex h-full items-end w-full">
            <div className="relative w-full">
              <div className="absolute w-full top-[35%] -translate-y-full">
                <div className="flex w-full pl-[70px] justify-between tablet:flex-col tablet:items-center tablet:h-[calc(100vh-70px)] tablet:pr-10 tablet:pl-10">
                  <div className="shrink-0 mb-[150px]">
                      <div className="tablet:flex tablet:justify-center">
                      <Title title="Boo party"/>
                      </div>
                      <p className="text-[0.8rem] text-comum">
                          <span className="text-halloween">Ás 20:30</span>, 
                          <span> no</span> 
                          <span className="text-halloween"> espaço do Romário </span> 
                          <span></span>no bairro do Conviver (Itapajé-CE)<br />
                          <span className="text-halloween">02/10/20234</span>
                      </p>
                      <button className="border-nonde text-comum text-[0.8rem] p-2 rounded-[20px] mt-[20px] bg-[#FFBB43]" onClick={handleNavigate}>CONFIRMAR PRESENÇA</button>
                  </div>

                  <div className="max-w-[400px] tablet:shrink">
                    <HouseMoon />
                  </div>
                </div>
              </div>
              
              <div className="relative w-full">
                <div className="absolute w-full top-[35%] -translate-y-full">
                    <Tree />
                </div>
                <img src={gardem} className="w-full"/>
              </div>
            </div>
          </div>
        </header>
    )
}

//absolute top-full -translate-y-[430px] z-[2] pl-[120px] tablet:top-1/4 tablet:-translate-y-1/2 tablet:-translate-x-1/2 tablet:left-1/2 tablet:pl-0