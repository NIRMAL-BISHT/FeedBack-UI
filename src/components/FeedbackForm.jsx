import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  const [reviewText, setReviewText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState("");
  const [message, setmessage] = useState("");
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setReviewText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (event) => {
    setReviewText(event.target.value);
    const { value: val } = event.target;
    if (val === "") {
      setbtnDisabled(true);
      setmessage(null);
    } else if (val !== "" && val.trim().length < 10) {
      setbtnDisabled(true);
      setmessage("Text must be atleast 10 characters");
    } else {
      setmessage(null);
      setbtnDisabled(false);
    }
  };

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (reviewText.trim().length >= 10) {
            if (feedbackEdit.edit === true) {
              updateFeedback(feedbackEdit.item.id, {
                rating,
                text: reviewText,
              });
            } else addFeedback(rating, reviewText);
            setReviewText("");
          }
        }}
      >
        <h2>How would you rate our service</h2>
        <RatingSelect select={(rat) => setRating(rat)}></RatingSelect>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={reviewText}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
