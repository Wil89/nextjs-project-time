import { cleanup, render, fireEvent } from "@testing-library/react";
import NewsletterRegistration from "../components/input/newsletter-registration";
import "@testing-library/jest-dom";
import Enzyme, {mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter() });

describe("newsletter registration tests", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<NewsletterRegistration />);
    expect(container).toMatchSnapshot();
  });

  test("should fire registration event", async () => {
    const handlerSubmitMock = jest.fn();
    const wrapper = mount(<NewsletterRegistration handlerRegistration={handlerSubmitMock} />)
    wrapper.find('input').simulate('change', {target: {value: 'wuj@gmail.com'}});
    wrapper.find('form').simulate('submit');
    expect(handlerSubmitMock).toBeCalled();
  });
});
