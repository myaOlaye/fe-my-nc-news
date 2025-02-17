import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getTopics } from "../api";
import { Spinner } from "react-bootstrap";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="container topics">
      <h3 style={{ textAlign: "left" }}>Trending Topics</h3>
      {isLoading ? (
        <Spinner
          animation="border"
          variant="primary"
          style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "start",
            marginTop: "3rem",
          }}
        >
          {topics.map((topic) => {
            return (
              <Card style={{ width: "10rem" }} key={topic.slug}>
                <Link to={`/topic/${topic.slug}`}>
                  <Card.Title>{topic.slug}</Card.Title>
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
};
