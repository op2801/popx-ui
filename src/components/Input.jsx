function Input({label,placeholder,type = "text",required = false,}) {
  return (
    <div className="input-group">
      <label>{label}{required && <span className="required">*</span>}</label>
      <input type={type} placeholder={placeholder}/>
    </div>
  );
}

export default Input;