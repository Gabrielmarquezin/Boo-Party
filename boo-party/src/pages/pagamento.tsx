import React, { DOMElement, useEffect, useState } from "react";
import { TextMain } from "../components/text/text_main";
import { Title } from "../components/text/title";
import { getSheet } from "../utils/get_xlsx";
import { usePDF } from 'react-to-pdf';


export const Pagamento = ()=>{
    return(
        <article id="pagamento">
            <Title title="Pagamento" color="halloween" />
            <TextMain>
                <p>.Valor de <span className="text-halloween">R$ 0,10</span></p>
                <p>.Pague em espécie ou, se preferir no PIX pela chave a seguir: <span className="text-halloween">Chave Pix: gabrielmarquesaraujo22@gmail.com</span> {'('}Email{')'}</p>
            </TextMain>
            <Convidados />
        </article>
    )
}

const Convidados = ()=>{
    const [convidados, setConvidados] = useState([])
    const { toPDF, targetRef } = usePDF({filename: 'lista.pdf'});

    useEffect(()=>{
        getSheet("https://docs.google.com/spreadsheets/d/1rgiZKv1Ei_RVRBy-peMXlTGegr_HcpneSg3hU5uuU1E/export?format=xlsx")
        .then((data: any)=>{
            data.shift()
            setConvidados(
                data.map((c: any[]) => c[0])
            )
        })
        .catch(error => {
            setConvidados([])
        })
    }, [])

   
    return(
         <>
            <div className="h-[1px] overflow-hidden">
                <div className="p-[20px]" id="content" ref={targetRef}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nomes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                convidados.map((c: any, i: any) => (
                                    <tr key={i}>
                                        <th className="font-normal text-left">
                                            <span className="font-bold">.</span>{c}
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
           
            <div className="pt-[50px]">
                <button className="text-halloween underline" onClick={()=> toPDF()} >Lista dos convidados</button>
            </div>
        </>
    
    )
}