import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizSelection from "../components/QuizSelection";
import Top from "../components/Top";
import QuizList from "../components/QuizList";
import Score from "../components/Score";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/:quizId" element={<QuizList />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
