import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { logInUser } from "../api";
import { AuthContext } from "../contexts/AuthProvider";

export const Login = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    usernameInput: "",
    passwordInput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const loginDetails = {
      username: loginFormData.usernameInput,
      password: loginFormData.passwordInput,
    };

    logInUser(loginDetails)
      .then(({ accessToken }) => {
        setSuccess(true);
        setAuth({
          username: loginDetails.username,
          password: loginDetails.password,
          accessToken,
        });
        console.log(success);
        console.log(auth);
      })
      .catch((err) => {
        if (err.status === 404) {
          setError("Username and/or password incorrect");
        }
        if (err.status === 500) {
          setError("Something went wrong, please try again later.");
        }
      });
  };

  return (
    <>
      <h2>Log in to your account</h2>

      {success ? (
        <>
          <p> You are logged in!</p>
          <Link to="/account">
            <p>Go to your account</p>
          </Link>
        </>
      ) : (
        <Form className="container">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="usernameInput"
              value={loginFormData.usernameInput}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="passwordInput"
              value={loginFormData.passwordInput}
              onChange={handleChange}
            />
          </Form.Group>
          <p> {error ? `${error}` : ""}</p>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      )}
    </>
  );
};

// <Link to={user ? "/" : "#"}>
// {/* this not working - come back */}

// </Link>
