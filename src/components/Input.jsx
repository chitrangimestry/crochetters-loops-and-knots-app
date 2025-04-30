const Input = ({ type, placeholder, onChange, onBlur, ...props }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        nanme={props.name}
        className={props.className}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
