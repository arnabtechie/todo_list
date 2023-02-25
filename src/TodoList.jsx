import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  }

  const handleAddTodo = () => {
    const todoText = newTodo.trim();
    if (todoText.length > 0) {
      const newTodo = {
        text: todoText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => handleToggleCompleted(index)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
