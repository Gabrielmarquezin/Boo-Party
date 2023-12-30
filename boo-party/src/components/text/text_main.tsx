

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const  TextMain = ({children} : Props)=>{
    return(
        <div className="flex flex-col gap-[19px] [&_p]:font-light [&_p]:font-inter [&_p]:text-comum text-[0.9rem] small-smartphone:text-[0.8rem]">
            {children}
        </div>
    )
}