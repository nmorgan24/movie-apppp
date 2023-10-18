import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;