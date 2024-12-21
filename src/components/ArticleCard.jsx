import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <section className="d-flex align-items-center justify-content-center container">
      <Card
        className="card-container"
        style={{ width: "100%", margin: "1rem" }}
      >
        <Card.Img
          variant="top"
          src={article.article_img_url}
          className="card-image mb-2"
        />
        <div className="card-content">
          <Card.Title>{article.title}</Card.Title>
          <Card.Header>{article.topic}</Card.Header>
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Text>
              <p>
                By {article.author} on{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p>{article.comment_count} comments</p>
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Link to={`/articles/${article.article_id}`}>
                <Button variant="primary">Read more</Button>
              </Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </section>
  );
};
