import './FormField.css';

const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
    return (
      <div className="form-field">
        <label htmlFor={htmlFor}>{label}</label>
        {children}
        {hasError && errorMessage ?
          <p data-testid="field-error">{errorMessage}</p> : null}
      </div>
    );
  };

export default FormField;