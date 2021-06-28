import "./App.css";
import Container from "./components/Container";
import Form from "./components/Form";
import Notification from "./components/Notification";

function App() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(66,119,143,0.76234243697479) 25%, rgba(69,113,168,1) 100%)",
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
