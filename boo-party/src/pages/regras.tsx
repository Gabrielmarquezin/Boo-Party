import React from "react";
import { TextMain } from "../components/text/text_main";
import { Title } from "../components/text/title";

export const Regras = ()=>{
    return(
        <article id="regras">
            <Title title="Regras" color="halloween" />
            <TextMain>
                <p>.A chegada no local será possível a partir do horário contido no convite;</p>
                <p>.A festa à fantasia acontecerá a partir das 18h, sendo seu termino às 00h;</p>
                <p>.Será disponibilizado comidas e bebidas no turno da manhã e no horário da desta {'('}o almoço não está incluso{')'};</p>
                <p>.O total da contribuição unitária é de R$15,00, sendo o acumulativo da contribuição usada no custeio do aluguel do espaço, alimentação e ambientação/decoração;</p>
                <p>.Esse momento foi feito com objetivo de descontração, portanto pedimos atenção e compreensão na leitura das seguintes regras:</p>
                <p>.Será cobrado de todos os convidados o respeito com as pessoas presentes no local;</p>
                <p>.“Convidado não convida” {'('}a menos que seja permitido tal convite{')'};</p>
                <p>.O pagamento da contribuição será necessária para o ingresso na festa;</p>
                <p>.Seguir o que for orientado nas publicações oficiais da “Boo Party” a fim de evitar confusões e desinformação.</p>
            </TextMain>
        </article>
    )
}