import React, { createContext, useContext, useReducer } from "react";

const ScoreContext = createContext();
const INITIAL_STATE = [...Array(10)];

const scoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return state.map((score, index) => {
        if (action.payload.index === index) {
          return action.payload.score;
        } else {
          return score;
        }
      });
    default:
      return state;
  }
};

const ScoreProvider = ({ children }) => {
  const [score, dispatchScore] = useReducer(scoreReducer, INITIAL_STATE);

  return (
    <ScoreContext.Provider
      value={{
        score,
        dispatchScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => useContext(ScoreContext);

export { useScore, ScoreProvider as default };
