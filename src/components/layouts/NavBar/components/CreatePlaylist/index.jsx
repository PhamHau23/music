import styles from "./CreatePlaylist.module.scss"

function CreatePlaylist(){
    return(
        <div className={styles.wrap}>
            <span className="line"style={{backgroundColor: '#858282'}}></span>
            <div>
                <p>+</p>
                <p>Tạo playlist mới</p>
            </div>
        </div>
    )
}

export default CreatePlaylist