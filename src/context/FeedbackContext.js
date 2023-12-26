import { createContext, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 2 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      setFeedback(feedback.filter((item) => id !== item.id));
    }
  };

  // Add feddback
  const addFeedback = (rating, text) => {
    setFeedback([...feedback, { id: uuidv4(), rating, text }]);
  };

  const updateFeedback = (id, item) => {
    const updated = feedback.filter((feed) => feed.id !== id);
    setFeedback([...updated, { id, rating: item.rating, text: item.text }]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
