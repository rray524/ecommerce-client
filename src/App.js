import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <>
      <Container>
        <AddProduct />
      </Container>
    </>
  );
}

export default App;
