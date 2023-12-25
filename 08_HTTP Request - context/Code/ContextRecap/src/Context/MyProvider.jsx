import axios from "axios";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

export default MyProvider;
