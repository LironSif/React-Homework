import { createContext } from "react";
import useAxios from "../hooks/useAxios";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const {
    data: todos,
    loading,
    error,
  } = useAxios("https://jsonplaceholder.typicode.com/todos");

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error in Todos : {error}</div>;
  }

  return (
    <TodosContext.Provider value={{ todos }}>{children}</TodosContext.Provider>
  );
};

export default TodosContextProvider;
