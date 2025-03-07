// src/components/AddTodoForm.jsx
import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button data-testid="add-button" type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
