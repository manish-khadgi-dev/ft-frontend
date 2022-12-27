import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { postUser } from "../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin" || name === "confirmPin") {
      if (!+value) {
        return alert("only numbers allowed");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPin, ...rest } = form;
    if (confirmPin !== rest.pin) {
      toast.error("Pin do not match");
    }

    const { status, message } = await postUser(rest);

    toast[status](message);
  };

  const fields = [
    {
      label: "Full Name",
      placeholder: "your name",
      name: "name",
      required: true,
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      name: "email",
      type: "email",
      required: true,
      value: form.email,
    },
    {
      label: "Pin",
      placeholder: "1234",
      name: "pin",
      type: "password",
      minLength: "4",
      maxLength: "4",
      required: true,
      value: form.pin,
    },
    {
      label: "Confirm Pin",
      placeholder: "1234",
      name: "confirmPin",
      type: "password",
      minLength: "4",
      maxLength: "4",
      required: true,
      value: form.confirmPin,
    },
  ];

  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page p-5 ">
          <Col className="bg-primary text-center">
            <div className="info  p-2 pt-5 text-white mt-5">
              <h1> Welcome to Our system</h1>
              <p> Manage your finance with tracker</p>
            </div>
          </Col>
          <Col>
            <div className="form">
              <div>
                <h1 className="text-center text-primary">Register here</h1>
              </div>
              <hr />
              <Form onClick={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
              <div className="text-end mt-5">
                Already have account <Link to="/"> Login Here</Link>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
