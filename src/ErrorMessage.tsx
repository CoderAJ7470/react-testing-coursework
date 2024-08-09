const ErrorMessage = ({ message = "Something went wrong" }) => (
 <div data-testid='error-message'>{message}</div>
);

export default ErrorMessage;
