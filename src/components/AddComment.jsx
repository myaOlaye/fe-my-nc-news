import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../contexts/CommentsContext";
import { postComment } from "../api";

export const AddComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const { setComments } = useContext(CommentsContext);
  const [uploadMessage, setUploadMessage] = useState(null);

  const handleChange = (e) => {
    setCommentInput(e.target.value);
    setUploadMessage(null);
  };

  const uploadComment = (e) => {
    e.preventDefault();

    if (commentInput === "") {
      setUploadMessage("Please type a valid comment before posting");
    } else {
      setUploadMessage("Your comment is uploading...");

      const newComment = {
        username: "tickle122",
        body: commentInput,
      };

      postComment(article_id, newComment)
        .then((comment) => {
          setComments((currComments) => {
            setUploadMessage("Comment succesfully posted!");
            return [...currComments, comment];
          });
        })
        .catch((err) => {
          setUploadMessage("Your comment failed to upload. Please try again!");
          console.log(err);
        });
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          value={commentInput}
          id="comment-input"
          placeholder="Leave a comment"
          aria-label="Leave a comment"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={uploadComment}
        >
          Post
        </Button>
      </InputGroup>
      {uploadMessage ? <p>{uploadMessage}</p> : null}
    </>
  );
};

{
  /* <form className="Add-events" onSubmit={handleSubmit}>
  <h2>Pick a City</h2>
  <label htmlFor="city-input"></label>
  <input
    name="cityInput"
    type="text"
    placeholder="Type a city"
    id="city-input"
    value={cityInput}
    onChange={handleChange}
  />
  <Button variant="info" type="submit">
    Search
  </Button>
</form>; */
}
