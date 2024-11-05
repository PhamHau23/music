import { useEffect } from "react"
import Button from "src/components/Button"

function DpAllItem({dpAllItem, setDpAllItem}){

    useEffect(() => {
        setDpAllItem(dpAllItem)
    }, [dpAllItem])

    return(
        <div>
            <Button children={'TẤT CẢ'} onClick={() => setDpAllItem(!dpAllItem)}/>
        </div>
    )
}

export default DpAllItem