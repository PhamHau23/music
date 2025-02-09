import styles from "./SongIconMusic.module.scss"

function SongIconMusic({icon, className}){
    return (
        <span className={className}>{icon}</span>
    )
}

export default SongIconMusic