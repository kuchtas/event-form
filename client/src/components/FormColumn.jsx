const FormColumn = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: "1",
      }}
    >
      {children}
    </div>
  );
};

export default FormColumn;
