import { render, screen } from "@testing-library/react";
import ValidationMessage from "./ValidationMessage";

describe("ValidationMessage", () => {
  it("renders error message", () => {
    render(<ValidationMessage message="Error!" type="error" />);
    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  it("renders success message with headline and subtext", () => {
    render(
      <ValidationMessage
        message={["Tack", "Bekräfta via mejl"].join("\n")}
        type="success"
      />
    );
    expect(screen.getByText("Tack")).toBeInTheDocument();
    expect(screen.getByText("Bekräfta via mejl")).toBeInTheDocument();
  });
});
