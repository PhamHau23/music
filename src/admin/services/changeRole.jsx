import { toast } from "react-toastify"
import { api } from "../AdminLayout"

const changeRole = async(e) => {
    e.preventDefault()

    const role = await e.target.role.value
    const id = await e.target.role.id
    
    const toastLoadingId = toast.loading('đang thay đổi', {
        closeButton: true
    })

    try {
        const response = await fetch(`${api}admin/put/role/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({role})
        })

        const data = await response.json()
        toast.dismiss(toastLoadingId)
        if(response.ok){
            toast.success(data.message, {
                closeButton: true
            })
        }else{
            toast.error(data.message, {
                closeButton: true
            })
        }
    } catch (error) {
        toast.dismiss(toastLoadingId)
        toast.error(error.message, {
            closeButton: true
        })        
    }
}

export default changeRole