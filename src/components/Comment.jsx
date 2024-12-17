import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { deleteComment } from "../api";
import { CommentFeedbackContext } from "../contexts/CommentFeedbackContext";

export const Comment = ({ comment }) => {
  const user = "tickle122";
  const { setCommentFeedback } = useContext(CommentFeedbackContext);

  const handleDelete = () => {
    setCommentFeedback("Deleting ...");
    deleteComment(comment.comment_id)
      .then(() => {
        setCommentFeedback("Your comment was succesfully deleted");
      })
      .catch((err) => {
        setCommentFeedback("Comment failed to delete. Please try again.");
        console.log(err);
      });
  };

  return (
    <>
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
        {user === comment.author ? (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        ) : null}
      </Card>
    </>
  );
};
