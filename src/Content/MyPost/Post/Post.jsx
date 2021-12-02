import React from "react"; 
import s from "./Post.module.css"

const Post = (props) => {
    return <div className={s.posts}>
    <div className={s.post}>
        <img className={s.userpost} src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"/>
        {props.message}
    </div>
    </div>
    
}

export default Post;