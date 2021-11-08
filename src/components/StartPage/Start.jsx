import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("quiz");
  };
  return (
    <div className="start">
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>Καλώς ορίσατε</strong>
          <p>στην εφαρμογή μας</p>
        </div>
        <div className="mainDescription description">
          <p className>
            <strong>Ξεκινήστε να κερδίζετε</strong> από το οποιοδήποτε μέρος
            όπου και να βρίσκεστε ,
            <strong>
              γι αυτό χρειάζεστε μόνο το κινητό σας και το Ίντερνετ .
            </strong>
          </p>
          <p className>
            Για να φτιάξετε
            <strong>λογαριασμό</strong> πρέπει ν
            <strong>απαντήσετε σε μερικές εύκολες ερωτήσεις</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState}>
            <p>Συνέχεια</p>
            <IoIosArrowForward className="arrowIcon" />
          </button>
        </div>
      </main>
    </div>
  );
}
