const Input = ({ type, placeholder, ...props }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        nanme={props.name}
        className={props.className}
      />
    </>
  );
};

export default Input;
