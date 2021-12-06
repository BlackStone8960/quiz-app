import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizes from "../data/quiz";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";
import { useScore } from "../context/ScoreProvider";

const ERROR_ANSWER_ALL = "Answer all questions.";

const QuizList = () => {
  const { quizId } = useParams();
  const { score } = useScore();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (score.includes(undefined)) {
      setError(ERROR_ANSWER_ALL);
      return;
    } else {
      navigate("/score");
    }
  };
  return (
    <div>
      {quizes[quizId].map((quiz, index) => (
        <Quiz {...quiz} key={quiz.question} index={index} />
      ))}
      <div>{error}</div>
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
};

export default QuizList;
