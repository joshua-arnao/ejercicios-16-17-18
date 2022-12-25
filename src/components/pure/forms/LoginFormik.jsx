import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Button, Checkbox, Input } from "antd";
import { Form as FormAntd } from "antd";

import "./LoginFormik.scss";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = (props) => {
  const history = useHistory();
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <Card
      style={{
        width: 450,
      }}
    >
      <h3>Bienvenidos</h3>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} // onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));

          // We save the data in the localstorage
          await localStorage.setItem("credentials", values);
          history.push("/task");
        }}
      >
        {/* We obtain props form Formik */}
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-login">
            <div className="form-login-content">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="youremail@correo.com"
                type="email"
              />
              {/* Email Errors */}
              {errors.email && touched.email && (
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="error-message"
                ></ErrorMessage>
              )}
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              {/* Password Errors */}
              {errors.password && touched.password && (
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="error-message"
                ></ErrorMessage>
              )}
            </div>
            <div className="form-login-actions">
              <Button
                type="primary"
                htmlType="submit"
                variant="contained"
                block
              >
                Login
              </Button>
              {isSubmitting ? <p>Login your credentials...</p> : null}O{" "}
              <Link to="/signin">Registrate ahora!</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default LoginFormik;
