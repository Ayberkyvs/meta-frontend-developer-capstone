import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the Booking Form', () => {
    render(<BookingPage />);
    const headingElement = screen.getByTestId("booking-form");
    expect(headingElement).toBeInTheDocument();
})