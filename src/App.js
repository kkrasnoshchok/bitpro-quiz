import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/QuizMain";
import { QuizContext } from "./helpers/contexts";
import Start from "./components/StartPage/Start";
import Header from "./components/Header/Header";

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="app">
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {<Header />}
        {gameState === "start" && <Start />}
        {gameState === "quiz" && <Quiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
