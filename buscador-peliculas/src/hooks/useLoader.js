import { useState } from "react";

export function useLoader(){
    const [loader, setLoader] = useState(false)
    const oldFetch = window.fetch

    window.fetch = (url, init) =>{
        setLoader(true)
        return oldFetch(url,init)
            .then((res)=>res)
            .catch((err) =>err)
            .finally(()=>{
                setLoader(false)
            })
    }
    return {loader}
}