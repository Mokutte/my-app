import React from "react"; 
import s from './Content.module.css'
import Mypost from "./MyPost/MyPost";
import Profile from "./Profile/Profile";

const Content = () => {
    return <div className={s.Content}>
    <img className={s.Contentpng} src="http://nevseoboi.com.ua/uploads/posts/2011-05/1305753924_wallpapers-by-nevseoboi-63_www.nevseoboi.com.ua.jpg"/>
    <Profile />
    <Mypost />
    </div>
    
}

export default Content;