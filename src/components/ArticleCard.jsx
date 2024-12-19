import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Header> {article.author}</Card.Header>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.created_at}
          <br></br>
          {article.comment_count} comments
          <br></br>
          Topic: {article.topic}
        </Card.Text>
        <Link to={`/articles/${article.article_id}`}>
          <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
