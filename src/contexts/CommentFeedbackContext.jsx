import { createContext, useState } from "react";

export const CommentFeedbackContext = createContext();

export const CommentFeedbackProvider = ({ children }) => {
  const [commentFeedback, setCommentFeedback] = useState("");

  return (
    <CommentFeedbackContext.Provider
      value={{ commentFeedback, setCommentFeedback }}
    >
      {children}
    </CommentFeedbackContext.Provider>
  );
};
