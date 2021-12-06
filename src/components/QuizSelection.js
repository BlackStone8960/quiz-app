import React from "react";
import { Link } from "react-router-dom";

const QuizSelection = () => {
  return (
    <div>
      <Link to="/quiz/react">React</Link>
      <Link to="/quiz/js">Javascript</Link>
    </div>
  );
};

export default QuizSelection;
