export const GenrePageBanner = (data) => {
    return(
        <div className="banner">
            <img src={data.data.img} alt="" />
            <p>{data.data.name}</p>
        </div>
    )
}