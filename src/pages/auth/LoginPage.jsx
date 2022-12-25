import React from "react";
import LoginFormik from "../../components/pure/forms/LoginFormik";

import { Col, Row } from "antd";

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col>
        <LoginFormik></LoginFormik>
      </Col>
    </Row>
  );
};

export default LoginPage;
