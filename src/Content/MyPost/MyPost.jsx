import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={s.my_post}>
      <div>
        <h3>My Post</h3>
        <div className={s.addPost}>
          <div>
            <input
              onChange={onPostChange}
              className={s.input}
              ref={newPostElement}
              placeholder="Anything new?"
              value={props.newPostText}
            />
          </div>
          <div>
            <button className={s.btn} onClick={onAddPost}>
              Add post
            </button>
          </div>
        </div>
        {postElement}
      </div>
    </div>
  );
};

export default MyPost;
