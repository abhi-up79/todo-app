import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import { getTodos } from './Service/todoService';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
}, [])

  const loadTodos = async () => {
    const response = await getTodos();
    setTodos(response.data.todos);
  }

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => 
      todo.id != id
    ))
  }

  return (
    <>
      <h2>Todo App</h2>
      <AddTodo onAdd={handleAdd}></AddTodo>
      <TodoList todos={todos} onDelete={handleDelete}></TodoList>
    </>
  )
}

export default App
