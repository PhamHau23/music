import classNames from "classnames/bind"
import styles from "./Category.module.scss"
import CategoryItem from "../CategoryItem"


function Category({title, data}){

    const c = classNames.bind(styles)
    console.log(data);
    

    return(
        <div className={c('Category-wrap')}>
            <h1>{title}</h1>
            <CategoryItem data={data}/>
        </div>
    )
}

export default Category