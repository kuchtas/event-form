const Container = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "60vw",
        height: "90vh",
        margin: "auto",
        borderRadius: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
