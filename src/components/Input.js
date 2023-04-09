const Input = ({
  isInValid = false,
  inValidMessage = "",
  label = "",
  ...restProps
}) => {
  const inputClasses = `form-control ${isInValid ? "invalid" : ""}`;
  return (
    <div className={inputClasses}>
      <label htmlFor={restProps.id}>{label}</label>
      <input {...restProps} />
      {isInValid && <p className="error-text">{inValidMessage}</p>}
    </div>
  );
};

export default Input;
