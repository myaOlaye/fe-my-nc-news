import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

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
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};
