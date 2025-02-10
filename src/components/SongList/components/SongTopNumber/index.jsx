import styles from "./SongTopNumber.module.scss"

function SongTopNumber({number}){

    const topNumberStyle = (num) => {
        if(num == 1) return '1px var(--top-1-color)'
        else if(num == 2) return '1px var(--top-2-color)'
        else if(num == 3) return '1px var(--top-3-color)'
    }

    return(
        <i className={styles.topNumber} style={{WebkitTextStroke: topNumberStyle(number)}}>{number}</i> 
    )
}

export default SongTopNumber