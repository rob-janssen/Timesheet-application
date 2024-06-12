import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import MainNavbar from "../components/UI/MainNavbar";

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainLayout;
