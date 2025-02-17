import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Card, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { deleteComment } from "../api";
import { CommentFeedbackContext } from "../contexts/CommentFeedbackContext";

export const Comment = ({ comment }) => {
  const { auth } = useContext(AuthContext);
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
    <section>
      <Card
        style={{ borderRadius: "0" }}
        className="text-start container list-group-flush flex"
      >
        <ListGroup>
          <ListGroup.Item>
            <strong>{comment.author}</strong> -{" "}
            <span>
              {new Date(comment.created_at).toLocaleDateString()} at{" "}
              {new Date(comment.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>{comment.body}</Card.Body>
        {auth.username === comment.author ? (
          <Button
            onClick={handleDelete}
            style={{ width: "150px" }}
            className="align-self-end"
          >
            Delete
          </Button>
        ) : null}
      </Card>
    </section>
  );
};
