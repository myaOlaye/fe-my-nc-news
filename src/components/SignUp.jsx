import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { createNewUser } from "../api";
import { Link } from "react-router-dom";

// will need controlled states for each of the input boxes - DONE

// will need a username and password state ? DO WE? dont think we do actually!

// will need to send the username and password to the post user endpoint (in api.js)

// will need to let the user know they have successfully created an account (check
// api to see if user is actually added to db!)

// then either need to tell the user to login via login page or automatically log them in? for now, take them to the log in page

export const SignUp = () => {
  const [creatingUser, setCreatingUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    nameInput: "",
    usernameInput: "",
    passwordInput: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    setCreatingUser(true);
    e.preventDefault();

    const newUser = {
      name: loginFormData.nameInput,
      username: loginFormData.usernameInput,
      password: loginFormData.passwordInput,
    };

    createNewUser(newUser)
      .then((response) => {
        setCreatingUser(false);
        navigate("/login"); // after creating account could automatically sign user in and take to home
      })
      .catch((err) => {
        setCreatingUser(false);
        if (err.status === 500) {
          setError("Something went wrong, please try again later.");
        }
        if (err.status === 409) {
          console.log("in 409 if");
          setError(err.response.data.msg);
        }
      });
  };

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Sign Up with NC News
        </h2>
        <p
          style={{
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#555",
          }}
        >
          Join NC News today to stay informed with the latest updates, share
          your own thoughts through posts, and engage in meaningful discussions
          by commenting on others' stories.
        </p>
      </div>

      <Form
        className="container"
        style={{
          maxWidth: "500px",
          margin: "30px auto",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ fontWeight: "bold" }}>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="nameInput"
            value={loginFormData.nameInput}
            onChange={handleChange}
            style={{ borderRadius: "6px", padding: "10px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Choose a username"
            name="usernameInput"
            value={loginFormData.usernameInput}
            onChange={handleChange}
            style={{ borderRadius: "6px", padding: "10px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a password"
            name="passwordInput"
            value={loginFormData.passwordInput}
            onChange={handleChange}
            style={{ borderRadius: "6px", padding: "10px" }}
          />
        </Form.Group>
        {error && <p>{error}</p>}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {creatingUser ? (
            <Spinner
              animation="border"
              variant="primary"
              style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
            />
          ) : (
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "6px",
              }}
            >
              Sign up
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};
