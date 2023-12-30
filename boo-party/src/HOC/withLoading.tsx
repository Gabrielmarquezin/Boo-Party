import {FC, useState} from "react";
import { Loading } from "../components/load/loading";


export const WithLoading:(WrappedComponent: FC<any>) => FC = (WrappedComponent)=>{
    return ({...props})=>{
        const [load, setLoad] = useState(false)
        return(
           <>
                {
                    load
                        ? <Loading />
                        : <WrappedComponent isLoading={setLoad} {...props} />
                }   
           </>
        )   
    }
}