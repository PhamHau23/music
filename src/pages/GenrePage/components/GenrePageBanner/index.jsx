const GenrePageBanner = ({data}) => {
    return(
        <div className="banner">
            <img src={data.img} alt="" />
            <p>{data.name}</p>
        </div>
    )
}

export default GenrePageBanner