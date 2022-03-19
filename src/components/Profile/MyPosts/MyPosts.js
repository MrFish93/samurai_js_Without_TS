import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from './../../../redux/profile-reducer';

export const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const addPost = () => {props.dispatch(addPostActionCreator());}
    const onPostChange = () => {props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));}

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

