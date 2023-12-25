import React from "react";
import { PostsContext } from "./BlogContext/PostContextComponent";
import styles from "./posts.module.css";
import { useContext } from "react";

function Posts() {
  const { posts } = useContext(PostsContext);
  const postsSliced = posts.slice(0, 10);
  return (
    <div>
      <ul className={styles.cont}>
        {postsSliced.map((post) => (
          <li key={post.id}>
            <div className={styles.postcontainer}>
              <h1>Title : {post.title}</h1>
              <h3>Body : {post.body}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
