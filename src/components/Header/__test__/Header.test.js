import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
  it('should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading', { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY

it('should render same text passed into title prop', async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY
it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/Senthur/i);
  expect(headingElement).not.toBeInTheDocument();
});
