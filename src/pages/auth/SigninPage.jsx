import React from "react";

import { Col, Row, Card, Button, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col>
        <Card
          style={{
            width: 450,
          }}
        >
          <Link to="/">
            <Button type="link" icon={<ArrowLeftOutlined />}>
              Atrás
            </Button>
          </Link>
          <h3>Registrato</h3>
          <Form>
            <Form.Item label="Nombre" required>
              <Input />
            </Form.Item>
            <Form.Item label="Apellidos" required>
              <Input />
            </Form.Item>
            <Form.Item label="correo" rules={[{ type: "email" }]} required>
              <Input />
            </Form.Item>
            <Form.Item label="Contraseña" required>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registrarme
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SigninPage;
