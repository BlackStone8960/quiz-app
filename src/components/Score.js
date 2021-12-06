import React, { useState, useEffect } from "react";
import { useUser } from "../context/UsersProvider";
import { useScore } from "../context/ScoreProvider";
const Score = () => {
  const { user } = useUser();
  const { score } = useScore();
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (score) {
      const total = score.reduce((prev, current) => prev + current);
      setTotalScore(total);
    }
  }, [score]);
  return (
    <>
      <div>{user && user.name}</div>
      <div>Your score is {totalScore}</div>
    </>
  );
};

export default Score;
