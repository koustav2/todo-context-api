import { ToDo } from '@/types/todo';
import { createContext, useContext } from 'react';

interface ToDOContextProps {
  todos: ToDo[];
  addTodo: (todo: ToDo) => void;
  updateTodo: (id: string, todo: ToDo) => void;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const ToDoContext = createContext<ToDOContextProps>({
  todos: [],
  addTodo: (todo: ToDo) => {},
  updateTodo: (id: string, todo: ToDo) => {},
  deleteTodo: (id: string) => {},
  toggleComplete: (id: string) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};
export const TodoProvider = ToDoContext.Provider;
