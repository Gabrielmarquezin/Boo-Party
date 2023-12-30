import { TextMain } from "../components/text/text_main";
import { Title } from "../components/text/title";

export const Contatos = ()=>{
    return(
        <article id="contatos">
            <Title title="Contatos" color="halloween" />
            <TextMain>
                <p className="text-[0.9rem"><a href="#">@_boolparty</a></p>
            </TextMain>
        </article>
    )
}