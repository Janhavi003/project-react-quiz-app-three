import React, { useState } from "react";
import "../components/quiz.css";
import questions from "../resource/question.json";
import { useNavigate } from "react-router-dom";

function QuizComponent() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (num < 14) {
      setNum(num + 1);
    }
  };

  const handlePrevious = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleOption = (e) => {
    if (e.target.innerText === questions[num].answer) {
      alert("Correct answer");
      if (!attempted.includes(num)) {
        setAttempted((prevAttempted) => [...prevAttempted, num]);
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      alert("Incorrect answer");
      if (!attempted.includes(num)) {
        setAttempted((prevAttempted) => [...prevAttempted, num]);
      }
    }
  };

  const handleFinish = () => {
    navigate("/Result", { state: { score, attempted } });
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="quiz">
      <div className="questionText">
        <h2>Question</h2>
      </div>
      <div className="page">
        <h4>{num + 1} of 15</h4>
      </div>
      <div className="question">
        <h3>{questions[num].question}</h3>
      </div>
      <div className="options">
        <div className="option-1">
          <button className="optBtn" onClick={handleOption}>
            {questions[num].optionA}
          </button>
        </div>
        <div className="option-2">
          <button className="optBtn" onClick={handleOption}>
            {questions[num].optionB}
          </button>
        </div>
        <div className="option-3">
          <button className="optBtn" onClick={handleOption}>
            {questions[num].optionC}
          </button>
        </div>
        <div className="option-4">
          <button className="optBtn" onClick={handleOption}>
            {questions[num].optionD}
          </button>
        </div>
      </div>
      <div className="buttons">
        <div className="prev">
          <button id="prevBtn" className="button" onClick={handlePrevious}>
            Previous
          </button>
        </div>
        <div className="next">
          <button id="nextBtn" className="button" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="quit">
          <button id="quitBtn"  className="button" onClick={handleQuit}>
            Quit
          </button>
        </div>
        <div className="finish">
          <button id="finishBtn"  className="button" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;