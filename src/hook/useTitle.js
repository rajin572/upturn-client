import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - upturn`;
    },[title])
}

export default useTitle