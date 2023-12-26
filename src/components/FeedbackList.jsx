import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) return <h2>No Feedback Yet</h2>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item}></FeedbackItem>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
