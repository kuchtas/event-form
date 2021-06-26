const FormRow = ({ children, customStyles }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default FormRow;
