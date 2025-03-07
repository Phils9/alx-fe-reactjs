import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  // Test 1: Renders initial todos
  test('should render initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toHaveTextContent('Learn React');
    expect(screen.getByText('Build a Todo App')).toHaveTextContent('Build a Todo App');
  });

  // Test 2: Adds a new todo
  test('should add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toHaveTextContent('New Todo');
  });

  // Test 3: Toggles a todo
  test('should toggle a todo', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test 4: Deletes a todo
  test('should delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByTestId('delete-button')[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});