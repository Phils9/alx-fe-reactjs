// src/__tests__/AddTodoForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';
import '@testing-library/jest-dom';

describe('AddTodoForm Component', () => {
  test('renders input and button', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('calls onAdd with the correct value', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Check that onAdd was called with "New Todo"
    expect(mockOnAdd).toHaveBeenCalledWith('New Todo');
  });

  test('clears input after adding', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // After submission, input should be cleared
    expect(input).toHaveValue('');
  });
});
