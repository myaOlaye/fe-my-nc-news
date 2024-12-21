import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export const Header = () => {
  const user = "tickle122";
  return (
    <header
      className="bg-primary text-white py-3"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "left", marginLeft: "3rem" }}>
        <Link to="/" className="page-title">
          NC News
        </Link>
      </h1>

      <div
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
      </div>
    </header>
  );
};
