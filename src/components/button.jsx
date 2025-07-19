function Button({ value, onClick, className= "button" }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
