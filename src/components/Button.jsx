function Button({text,type = "button",className = "",onClick,disabled = false,}) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;