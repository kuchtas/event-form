import "./App.css";
import Container from "./components/Container";
import Form from "./components/Form";

function App() {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;
