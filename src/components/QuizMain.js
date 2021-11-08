import React, { Component } from "react";
import "./QuizMain.css";
import FinalPage from "./FinalPage/FinalPage";
import QuizPage from "./QuizPage/QuizPage";

export default class Quiz extends Component {
  // объект с данными
  state = {
    questions: {
      1: "Έχετε επενδυτική εμπειρία;",
      2: "Έχετε πορτοφόλι κρυπτονομισμάτων;",
      3: "Έχετε απεριόριστο Ίντερνετ στο κινητό Σας;",
      4: "Έπειτα την εγγραφή θα Σας καλέσει ο μάνατζερ σας,θα είστε έτοιμη να μιλήσετε στο τηλέφωνο ;",
    },
    answers: {
      1: {
        1: "Ναι",
        2: "Οχι",
        3: "Δυσκολεύομαι ν απαντήσω",
      },
      2: {
        1: "Ναι",
        2: "Οχι",
      },
      3: {
        1: "Ναι",
        2: "Οχι",
      },
      4: {
        1: "Ναι",
        2: "Οχι",
      },
    },
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };
  // функция переключения вопросов
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
