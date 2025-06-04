import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form (generic)", () => {
  it("renders all fields and options", () => {
    render(
      <Form
        options={["A", "B"]}
        onSubmit={jest.fn()}
        loading={false}
        error={null}
        success={null}
        validationErrors={[]}
      />
    );
    expect(screen.getByLabelText(/för- och efternamn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-post/i)).toBeInTheDocument();
    // Open the dropdown to reveal options
    fireEvent.click(screen.getByRole("button", { name: /välj aktiviteter/i }));
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("calls onSubmit with correct data", async () => {
    const onSubmit = jest.fn().mockResolvedValue({ success: "ok" });
    render(
      <Form
        options={["A"]}
        onSubmit={onSubmit}
        loading={false}
        error={null}
        success={null}
        validationErrors={[]}
      />
    );
    fireEvent.change(screen.getByLabelText(/för- och efternamn/i), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText(/e-post/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /välj aktiviteter/i }));
    fireEvent.click(screen.getByText("A"));
    fireEvent.click(screen.getByRole("button", { name: /skicka in anmälan/i }));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        name: "Test User",
        email: "test@example.com",
        selected: ["A"],
      })
    );
  });
});
