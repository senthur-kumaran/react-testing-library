import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.map((task) => {
      fireEvent.change(inputElement, { target: { value: task }});
      fireEvent.click(buttonElement);
    })
}

describe("Todo", () => {
  it('should render same text passed into title prop', () => {
    render(<MockTodo />);
    addTodo(["Hello Senthur!"]);

    const divElement = screen.getByText(/Hello Senthur!/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render render multiple items', () => {
    render(<MockTodo />);
    addTodo(["Hello Senthur!", "Happy New Year", "Hello World..."]);

    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it('task should not have completed class when initally rendered', () => {
    render(<MockTodo />);
    addTodo(["Hello Senthur!"]);

    const divElement = screen.getByText(/Hello Senthur!/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it('task should have completed class when clicked', () => {
    render(<MockTodo />);
    addTodo(["Hello Senthur!"]);

    const divElement = screen.getByText(/Hello Senthur!/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
