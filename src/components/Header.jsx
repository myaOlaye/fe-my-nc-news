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

      <Col xs={6} md={4} style={{ textAlign: "right" }}>
        <Image
          src="https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
          roundedCircle
          style={{
            width: "35px",
            height: "35px",
            border: "0.5px solid black",
            backgroundColor: "white",
          }}
        />
      </Col>
      <p style={{ fontSize: "10px", marginRight: "2rem", marginTop: "1rem" }}>
        Logged in as <br />
        {user}
      </p>
    </header>
  );
};
