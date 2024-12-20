import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext, useState } from "react";
import { CommentsContext } from "../contexts/CommentsContext";
import { CommentFeedbackContext } from "../contexts/CommentFeedbackContext";
import { postComment } from "../api";

export const AddComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const { setComments } = useContext(CommentsContext);
  const { commentFeedback, setCommentFeedback } = useContext(
    CommentFeedbackContext
  );

  const handleChange = (e) => {
    setCommentInput(e.target.value);
    setCommentFeedback("");
  };

  const uploadComment = (e) => {
    e.preventDefault();

    if (commentInput === "") {
      setCommentFeedback("Please type a valid comment before posting");
    } else {
      setCommentFeedback("Your comment is uploading...");

      const newComment = {
        username: "tickle122",
        body: commentInput,
      };

      postComment(article_id, newComment)
        .then((comment) => {
          setComments((currComments) => {
            setCommentFeedback("Comment succesfully posted!");
            return [...currComments, comment];
          });
        })
        .catch((err) => {
          setCommentFeedback(
            "Your comment failed to upload. Please try again!"
          );
          console.log(err);
        });
      setCommentInput("");
    }
  };

  return (
    <>
      <InputGroup className="mb-3 container">
        <Form.Control
          value={commentInput}
          id="comment-input"
          placeholder="Leave a comment"
          aria-label="Leave a comment"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          variant="dark"
          id="button-addon2"
          onClick={uploadComment}
          disabled={commentFeedback === "Your comment is uploading..."}
        >
          Post
        </Button>
      </InputGroup>
      {commentFeedback && <Alert variant="secondary">{commentFeedback}</Alert>}
    </>
  );
};
