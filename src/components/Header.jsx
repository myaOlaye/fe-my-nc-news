import { Link } from "react-router-dom";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../api";
import { Alert } from "react-bootstrap";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [logoutMessage, setLogoutMessage] = useState("");

  let username = "";

  if (Object.keys(auth).length !== 0) {
    const decodedToken = jwtDecode(auth.accessToken);
    username = decodedToken.username;
  }

  //This currently not working properly - users log out but when refresh logs straight back in
  const handleLogout = () => {
    setAuth({});
    logout()
      .then((response) => {
        console.log(response);
        setLogoutMessage("Successfully logged out!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header
      className="bg-primary text-white py-3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left" }}>
          <Link
            to="/"
            className="page-title"
            style={{ textDecoration: "none", color: "white" }}
          >
            NC News
          </Link>
        </h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {username ? (
            <>
              <p style={{ margin: 0 }}>Welcome back, {auth.username}!</p>
              <Link to="/account">
                <FaUser color="black" size={18}></FaUser>
              </Link>

              <FaSignOutAlt
                color="black"
                size={20}
                onClick={handleLogout}
              ></FaSignOutAlt>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button variant="light">Sign up</Button>
              </Link>
              <Link to="/login">
                <Button variant="light">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
      {logoutMessage && (
        <Alert
          variant="secondary"
          style={{
            marginTop: "1rem",
            width: "100%",
            textAlign: "center",
            padding: "0.5rem 1rem",
          }}
        >
          {logoutMessage}
        </Alert>
      )}
    </header>
  );
};

{
  /* <div
style={{
  display: "flex",
  alignItems: "center",
  textAlign: "right",
  marginRight: "2rem",
}}
>
<Image
  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
  roundedCircle
  style={{
    width: "35px",
    height: "35px",
    border: "0.5px solid black",
    backgroundColor: "white",
    marginRight: "0.5rem",
  }}
/>

<p style={{ fontSize: "10px", margin: 0 }}>
  Logged in as <br />
  {user}
</p>
</div> */
}
