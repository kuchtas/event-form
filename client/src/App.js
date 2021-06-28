import "./App.css";
import Container from "./components/Container";
import Form from "./components/Form";
import Notification from "./components/Notification";

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
      <Notification />
    </div>
  );
}

export default App;
