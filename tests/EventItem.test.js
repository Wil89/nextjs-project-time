import { cleanup, render, fireEvent } from "@testing-library/react";
import EventItem from "../components/events/event-item";

describe("Testing event item component", () => {
  beforeEach(cleanup);

  const item = {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  };

  it("should match snapshot", () => {
    const { container } = render(<EventItem {...item} />);
    expect(container).toMatchSnapshot();
  });
});
