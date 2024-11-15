import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('should correctly render all fields and their default values', async () => {
      render(
        <BookingForm availableTimes={availableTimes} submitData={submitData} />
      );

      const dateInput = screen.getByLabelText(/Date/);
      const timeSelect = screen.getByLabelText(/Time/);
      const timeOptions = await screen.findAllByTestId('booking-form__time--option');
      const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
      const occasionSelect = screen.getByTestId('booking-form__occasion__select');
      const occasionOptions = await screen.findAllByTestId(`booking-form__occasion--option`);
      const submitButton = screen.getByRole('button');

      expect(dateInput).toBeInTheDocument();
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('id', 'booking-form__date');
      expect(dateInput).toHaveValue(today);

      expect(timeSelect).toBeInTheDocument();
      expect(timeSelect).toHaveAttribute('id', 'booking-form__time');
      expect(timeOptions.length).toBe(5);

      expect(numberOfGuestsInput).toBeInTheDocument();
      expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-form__guests');
      expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
      expect(numberOfGuestsInput).toHaveValue(1);

      expect(occasionSelect).toBeInTheDocument();
      expect(occasionSelect).toHaveAttribute('id', 'booking-form__occasion');
      expect(occasionOptions.length).toBe(2);

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
      expect(submitButton).toBeEnabled();
    });

    test('should successfully submit form with default values', () => {
      render(
        <BookingForm availableTimes={availableTimes} submitData={submitData} />
      );

      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);

      expect(submitData).toHaveBeenCalledWith({
        "booking-form__date": today,
        "booking-form__time": availableTimes[0],
        "booking-form__guests": 1,
        "booking-form__occasion": "Birthday"
      });
    });

    test(
      `should display an error message and disable sumbit button when date
      field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );
      const dateInput = screen.getByLabelText(/Date/);
      const submitButton = screen.getByRole('button');

      fireEvent.change(dateInput, { target: { value: '' } });
      fireEvent.blur(dateInput);

      const errorMessage = screen.getByTestId('field-error');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please choose a valid date');
      expect(submitButton).toBeDisabled();
    });

    test(
      `should display an error message and disable sumbit button when number of
      guests field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );
      const submitButton = screen.getByRole('button');
      const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);

      fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
      fireEvent.blur(numberOfGuestsInput);

      const errorMessage = screen.getByTestId('field-error');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
      expect(submitButton).toBeDisabled();
    });
});