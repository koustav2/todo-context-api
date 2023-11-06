'use client'
import { useToDo } from "@/context/ToDoContext";
import { nanoid } from "nanoid";
import { useState } from "react";

function ToDoForm() {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const { addTodo, todos } = useToDo()

  const add = (e: any) => {
    e.preventDefault();
    if (!description || !title) {
      return;
    }
    addTodo({ id: nanoid(6), title, description, completed: false });
    setTitle('');
    setdescription('');
  };
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="Write title..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write description..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button onClick={add} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  )
}

export default ToDoForm;
