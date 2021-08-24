
import { Jumbotron,Container, Row, Col} from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
            <Row>
                <Col>
          <h1>Booklings</h1>
          <p>
            welcome to the store.
          </p>
          </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron