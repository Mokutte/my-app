import React from "react"; 
import s from './Mypost.module.css'
import Post from "./Post/Post";


const Mypost = () => {
    return <div className={s.my_post}>
    <div>My Post
      <div>New posts</div>
      <Post message='odsnfons'/>
      <Post message='odsnsdfons'/>
      <Post message='odsnfsdsons'/>
    </div>
    </div>
    
}

export default Mypost;