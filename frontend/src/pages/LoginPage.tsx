import React from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <h2 className="text-center mb-2">Sign in</h2>
            <Card.Text className="text-center mb-4">
              Log in to track your hours, manage your projects, and boost your
              productivity.
            </Card.Text>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-4"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Sign in
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
