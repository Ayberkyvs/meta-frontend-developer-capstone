import React from "react"
import './BookingForm.css'
import FormField from "../../ui/FormField/FormField";
import Button from "../../ui/Button/Button";

const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData
  }) => {
    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Anniversary'];
    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage =
      'Please enter a number between 1 and 10';

    const [form, setForm] = React.useState({
      "booking-form__date": minimumDate,
      "booking-form__time": defaultTime,
      "booking-form__guests": minimumNumberOfGuests,
      "booking-form__occasion": occasions[0]
    });

    const isDateValid = () => form["booking-form__date"] !== '' && form["booking-form__date"] >= minimumDate;
    const isTimeValid = () => form["booking-form__time"] !== '';
    const isNumberOfGuestsValid = () => form["booking-form__guests"] !== ''
    && form["booking-form__guests"] >= minimumNumberOfGuests
    && form["booking-form__guests"] <= maximumNumberOfGuests;
    const isOccasionValid = () => form["booking-form__occasion"] !== '';

    const areAllFieldsValid = () =>
      isDateValid()
      && isTimeValid()
      && isNumberOfGuestsValid()
      && isOccasionValid();

    const handleChange = e => {
      setForm(prev => {
        if (e.target.id === "booking-form__date") {
          dispatchOnDateChange(e.target.value);
        }
        return {
          ...prev,
          [e.target.id]: e.target.value,
        };
      });
    }

    React.useEffect(() => {
      areAllFieldsValid();
    }, [form]);

    const handleFormSubmit = e => {
      e.preventDefault();
      submitData(form);
      setForm({
        "booking-form__date": minimumDate,
        "booking-form__time": defaultTime,
        "booking-form__guests": minimumNumberOfGuests,
        "booking-form__occasion": occasions[0]
      });
    };

    return (
      <form id="booking-form" data-testid="booking-form" onSubmit={handleFormSubmit}>
        <FormField
          label="Date"
          htmlFor="booking-form__date"
          hasError={!isDateValid()}
          errorMessage={invalidDateErrorMessage}
        >
          <input
            type="date"
            id="booking-form__date"
            name="booking-form__date"
            min={minimumDate}
            value={form["booking-form__date"]}
            required={true}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          label="Time"
          htmlFor="booking-form__time"
          hasError={!isTimeValid()}
          errorMessage={invalidTimeErrorMessage}
        >
          <select
            id="booking-form__time"
            name="booking-form__time"
            value={form["booking-form__time"] || availableTimes[0]}
            required={true}
            onChange={handleChange}
            disabled={availableTimes.length === 0}
          >
            {availableTimes.map(time =>
              <option data-testid="booking-form__time--option" key={time}>
                {time}
              </option>
            )}
          </select>
        </FormField>
        <FormField
          label="Number of guests"
          htmlFor="booking-form__guests"
          hasError={!isNumberOfGuestsValid()}
          errorMessage={invalidNumberOfGuestsErrorMessage}
        >
          <input
            type="number"
            id="booking-form__guests"
            name="booking-form__guests"
            value={form["booking-form__guests"]}
            min={minimumNumberOfGuests}
            max={maximumNumberOfGuests}
            required={true}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          label="Occasion"
          htmlFor="booking-form__occasion"
          hasError={!isOccasionValid()}
          errorMessage={invalidOccasionErrorMessage}
        >
          <select
            id="booking-form__occasion"
            name="booking-form__occasion"
            value={form["booking-form__occasion"]}
            required={true}
            onChange={handleChange}
          >
            {occasions.map(occasion =>
              <option data-testid="booking-form__occasion--option" key={occasion}>
                {occasion}
              </option>
            )}
          </select>
        </FormField>
        <Button
          className="booking-form__button"
          type="submit"
          disabled={!areAllFieldsValid()}
          variant="fluid"
          data-testid="booking-form__button"
          role="button"
        >
          Make your reservation
        </Button>
      </form>
    );
  };

export default BookingForm