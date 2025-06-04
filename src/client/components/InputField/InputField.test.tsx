import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField", () => {
  it("renders label and input", () => {
    render(<InputField id="test" name="test" label="Test label" />);
    expect(screen.getByLabelText("Test label")).toBeInTheDocument();
  });

  it("calls onChange for text input", () => {
    const onChange = jest.fn();
    render(
      <InputField
        id="test"
        name="test"
        label="Test label"
        onChange={onChange}
      />
    );
    fireEvent.change(screen.getByLabelText("Test label"), {
      target: { value: "abc" },
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("renders checkbox and calls onChange", () => {
    const onChange = jest.fn();
    render(
      <InputField
        id="cb"
        name="cb"
        label="Check me"
        type="checkbox"
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByLabelText("Check me"));
    expect(onChange).toHaveBeenCalled();
  });
});
