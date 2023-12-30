
export const Menu = ()=>{
    return(
        <nav className="p-2">
            <ul>
                <li className="flex [&_a]:text-comum gap-8">
                    <a href="#regras" className="hover:text-halloween">regras</a>
                    <a href="#contatos" className="hover:text-halloween">contatos</a>
                    <a href="#pagamento" className="hover:text-halloween">pagamento</a>
                </li>
            </ul>
        </nav>
    )
}