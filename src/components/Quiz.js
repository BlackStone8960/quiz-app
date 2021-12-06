import React, { useState, useEffect } from "react";
import { useScore } from "../context/ScoreProvider";

const Quiz = ({ question, answer, index }) => {
  const [userAnswer, setUserAns] = useState(null);
  const { dispatchScore } = useScore();

  useEffect(() => {
    if (userAnswer) {
      const score = answer === userAnswer ? 10 : 0;
      dispatchScore({
        type: "ADD_ANSWER",
        payload: {
          index,
          score,
        },
      });
    }
  }, [userAnswer]);

  return (
    <div>
      <div>{question}</div>
      <label>
        <input
          type="radio"
          value="true"
          onChange={(e) => setUserAns(e.target.value)}
          checked={userAnswer === "true"}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="false"
          onChange={(e) => setUserAns(e.target.value)}
          checked={userAnswer === "false"}
        />
        No
      </label>
    </div>
  );
};

export default Quiz;
