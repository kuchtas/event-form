const SendButton = ({ onSubmit }) => {
  return (
    <button
      style={{
        height: "50px",
        minWidth: "250px",
        margin: "auto",
        borderRadius: "20px",
        border: "1px solid grey",
        backgroundColor: "#4571a8",
        color: "white",
      }}
      onClick={(e) => onSubmit(e)}
    >
      Submit
    </button>
  );
};

export default SendButton;
