import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  // Test 1: Renders initial todos
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // Test 2: Adds a new todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test 3: Toggles a todo
  test('toggles a todo', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test 4: Deletes a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});