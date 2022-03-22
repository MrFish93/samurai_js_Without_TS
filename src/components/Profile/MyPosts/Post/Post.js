import c from "./Post.module.css";

export const Post = (props) => {
    return (
        <div className={c.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='description'/>
            {props.message}
            <button> like {props.likesCount}</button>
        </div>
    )
}