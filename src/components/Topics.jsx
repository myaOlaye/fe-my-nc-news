import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>Topics</h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        {topics.map((topic) => {
          return (
            <Card style={{ width: "10rem" }} key={topic.slug}>
              <Link to={`/topic/${topic.slug}`}>
                <Card.Title>{topic.slug}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {topic.description}
                </Card.Subtitle>
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
};
