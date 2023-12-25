import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

const PostContextComponent = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    };

    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export default PostContextComponent;
