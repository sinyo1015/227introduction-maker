import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";

import sampleImage from "./assets/image-templates/type1-edit-en.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="p-4">
      <div className="text-center">
        <h3>Nananiji Self-Introduction Maker</h3>
        <span>
          <a href="#">EN</a>/<a href="#">JA</a>/<a href="#">ID</a>
        </span>
      </div>
      <Row className="gx-2 pt-4">
        <Col md={6} className="pt-2">
          <Card>
            <Card.Header className="bg-transparent">
              <h3 className="card-title text-center ">Input</h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col md={6} className="pt-2">
          <Card>
            <Card.Header className="bg-transparent">
              <h3 className="card-title text-center ">Result</h3>
            </Card.Header>
            <Card.Body>
              <Image 
                src={sampleImage}
                style={{width: "100%"}}
              />
            </Card.Body>
            <Card.Footer className="bg-transparent">
              <div className="d-flex" style={{gap: "2em", justifyContent: "center"}}>
                <div>
                  <Button>Preview</Button>
                </div>
                <div>
                  <Button>Download</Button>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
