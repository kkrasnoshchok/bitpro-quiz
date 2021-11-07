import React, { Component } from "react";
import "./QuizMain.css";
import FinalPage from "./FinalPage/FinalPage";
import QuizPage from "./QuizPage/QuizPage";

export default class Quiz extends Component {
  state = {
    questions: {
      1: "Do you have an experience in investment?",
      2: "Do you have a cryptocurreny wallet?",
      3: "Do you have a continuous access to your Smartphone and the Internet?",
      4: "After registration, your personal manager will call you, are you ready to speak on the telephone with him?",
    },
    answers: {
      1: {
        1: "Yes",
        2: "No",
        3: "I am at loss to answer",
      },
      2: {
        1: "Yes",
        2: "No",
      },
      3: {
        1: "Yes",
        2: "No",
      },
      4: {
        1: "Yes",
        2: "No",
      },
    },
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let { questions, answers, clickedAnswer, step, score } = this.state;

    return (
      <div>
        {step <= Object.keys(questions).length ? (
          <QuizPage
            answer={answers[step]}
            step={step}
            clickedAnswer={clickedAnswer}
            questions={questions}
            question={questions[step]}
            nextStep={this.nextStep}
          />
        ) : (
          <FinalPage score={score} questions={questions} />
        )}
      </div>
    );
  }
}
