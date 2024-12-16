import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export const Comment = ({ comment }) => {
  return (
    <Card>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{comment.author}</ListGroup.Item>
        <ListGroup.Item> {comment.created_at}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {comment.body}
        <br></br>
        Votes: {comment.votes}
      </Card.Body>
    </Card>
  );
};
