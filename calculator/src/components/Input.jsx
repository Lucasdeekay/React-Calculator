const Input = (props) => {

  return (
    <>
      <input
        onChange={props.onChange}
        type="text"
        className="form-control"
        value={props.value}
        disabled
      />
    </>
  );
};

export default Input;
