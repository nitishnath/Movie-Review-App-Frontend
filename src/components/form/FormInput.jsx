const FormInput = ({ name, label, placeholder, type, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        type={type}
        className="bg-transparent rounded border-2 border-dark-subtle focus:border-white w-full text-lg outline-none p-1 text-white peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-semibold text-dark-subtle peer-focus:text-white transition self-start"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
