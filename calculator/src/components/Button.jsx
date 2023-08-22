const Button = (props) => {
    const mode = `btn btn-${props.color} btn-${props.size} w-${props.width} ${props.cls}`;

    return (
      <>
        <button onClick={props.onClick} type={props.type} className={ mode }>
          {props.children}
        </button>
      </>
    );
}
 
export default Button;