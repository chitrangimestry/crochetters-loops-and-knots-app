const Input = ({ type, placeholder, name, onChange, onBlur, ...props }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={props.className}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </>
  );
};

export default Input;
