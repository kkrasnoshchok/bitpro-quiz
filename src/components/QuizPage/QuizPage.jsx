import React, { useState, useEffect } from "react";
import Loader from "react-spinners/ClipLoader";
import Answer from "../answer/Answer";
import Question from "../question/Question";
import "./QuizPage.css";

function QuizPage(props) {
  const [loading, setLoading] = useState(false);

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="quiz">  
      {loading ? (
        <Loader/>
      ) : (
        <div className="quizPage">
        <div className="container">
          <div className="quizInner">
            <div className="quizQuestion question">
              <Question question={props.question} />
            </div>
            <div className="quizAnswers">
              <Answer
                answer={props.answer}
                step={props.step}
                nextStep={props.nextStep}
                clickedAnswer={props.clickedAnswer}
              />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
