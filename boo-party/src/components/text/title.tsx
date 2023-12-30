
type TitleProps = {
    title: string,
    color?: string
}

export const Title = ({title, color} :TitleProps)=>{
    return(
        <p className={`font-halloween text-${color ? color : 'comum'} text-title-size`}>{title}</p>
    )
}