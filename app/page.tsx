'use client';
import { ToDo } from '@/types/todo';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoProvider } from '@/context/ToDoContext';
import ToDoForm from '@/components/ToDoForm';
export default function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (todo: ToDo) => {
    setTodos((prev) => [{ ...todo, id: nanoid(8), ...prev }]);
  };
  const updateTodo = (id: string, todo: ToDo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const todos: ToDo[] = JSON.parse(localStorage.getItem('todos') as string);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos?.map((todo) => (
              <div key={todo.id} className="w-full"></div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
