import React from "react";
import "./Answer.css";

const Answer = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <div
      className="answer"
      onClick={() => props.nextStep(props.step)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </div>
  ));

  return (
    <div disabled={props.clickedAnswer ? true : false} className="answers">
      {answers}
    </div>
  );
};

export default Answer;
