import React from "react";
import { useState, useEffect } from "react";
import { updateVoteCount } from "../api";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";

export const Votes = ({ article_id, votes, setArticle }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [voteError, setVoteError] = useState(null);

  const handleClick = (e) => {
    let vote = { inc_votes: 0 };
    e.target.name === "vote-up" ? (vote.inc_votes = 1) : (vote.inc_votes = -1);

    setVoteCount((currVoteCount) => {
      return currVoteCount + vote.inc_votes;
    });

    setVoteError(null);

    updateVoteCount(article_id, vote)
      .then(({ updatedArticle }) => {
        setArticle(updatedArticle);
      })
      .catch((err) => {
        setVoteError("Your vote was not successful. Please try again!");
        setVoteCount((currVoteCount) => {
          return currVoteCount + vote.inc_votes * -1;
        });
        console.log(err);
      });
  };

  return (
    <>
      <p>
        Votes <Badge>{voteCount}</Badge>
      </p>
      <Button name="vote-up" onClick={handleClick}>
        Vote Up
      </Button>
      <Button name="vote-down" onClick={handleClick}>
        Vote Down
      </Button>
      {voteError ? <p>{voteError}</p> : null}
    </>
  );
};
