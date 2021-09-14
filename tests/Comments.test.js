import Comments from "../components/input/comments";
import { render, cleanup } from "@testing-library/react";

describe("Comments components tests", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<Comments />);
    expect(container).toMatchSnapshot();
  });
});
