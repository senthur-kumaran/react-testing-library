import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MocockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

describe("FollowersList", () => {

  beforeEach(() => {
    console.log("Running before each test");
  });

  beforeAll(() => {
    console.log("Running before all tests");
  });

  afterEach(() => {
    console.log("Running after each test");
  });

  afterAll(() => {
    console.log("Running after all tests");
  })

  it('should render follower items', async () => {
    render(<MocockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MocockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MocockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render multiple follower items', async () => {
  //   render(<MocockFollowersList />);
  //   const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElement.length).toBe(5);
  // });
});