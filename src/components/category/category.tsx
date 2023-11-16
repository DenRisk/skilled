export type CategoryModel = {
    icon: any,
    title: string,
    text: string
    linkText: string
}

const Category = (props: CategoryModel) => {
    return (
        <div className='category'>
            <div className='category__iconContainer'>
                <img src={props.icon} alt={'icon'}/>
            </div>
            <h4 className='category__title'>{props.title}</h4>
            <p className='category__text'>{props.text}</p>
            <div className='category__link'>{props.linkText}</div>
        </div>
    )
}
export default Category;