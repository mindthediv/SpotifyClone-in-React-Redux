import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BottomPlayer = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <div className="col-lg-10 offset-lg-2">
          <Row>
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row>
                <a href="#">
                  <img src="../playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </Col>
          </Row>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default BottomPlayer;
