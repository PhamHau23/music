import classNames from "classnames/bind"
import styles from "./NationList.module.scss"
import { useNavigate } from "react-router-dom"
import useFetchApi from "src/hooks/useFetchApi"

function NationList({title}){
    const c = classNames.bind(styles)

    const data = useFetchApi('nation')

    const navigate = useNavigate()

    const handleClickNavigate = (nationid) => {
        navigate(`/genre/${nationid}`)
    }

    console.log(data)

    return(
        <div className={c('nationList-wrap')}>
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className={c('nationList')}>
                {
                    data.map((item) => (
                        <div className={c('nationItem')} key={item.id} onClick={() => handleClickNavigate(item.id)}>
                            <img src={item.img} alt="" />
                            <p>{item.name.toUpperCase()}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NationList