import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  const nameInput = screen.getByLabelText(/Nome/i);
expect(nameInput).toBeInTheDocument();

  const headingElement = screen.getByText(/Prenota un tavolo/i);
  expect(headingElement).toBeInTheDocument();
});
