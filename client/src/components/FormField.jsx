const FormField = ({ label, type, customStyles, onChange, errors }) => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        ...customStyles,
      }}
    >
      <label
        htmlFor={label}
        style={{
          textTransform: "uppercase",
          width: "100%",
          fontSize: "1.3em",
          color: errors ? "red" : "black",
        }}
      >
        {errors ? errors : label}
      </label>
      <input
        type={type}
        name={label}
        style={{
          display: "block",
          width: "100%",
          height: "30px",
          borderRadius: "10px",
          border: errors ? "1px solid red" : "1px solid grey",
          padding: "5px 15px 5px 15px",
        }}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default FormField;
