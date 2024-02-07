import React from 'react';
import '../components/result.css';
import { NavLink, useLocation } from 'react-router-dom';

function ResultComponent() {
  const location = useLocation();
  const score = location.state.score;
  const attempted = location.state.attempted;
  const attemptedCount = attempted.length;

  return (
    <div className='result'>
      <h1 className='text'>Result</h1>
      <div className='resultPage'>
        <div className='phrases'>
          <h2>
            <strong>
              {score < 6
                ? 'You need more practice!'
                : score >= 6 && score < 11
                ? 'Good job! You can do better!'
                : 'Great job! Keep it up!'}
            </strong>
          </h2>
        </div>
        <div className='score'>
          <h1>
            <strong>Your score is {Math.round((score / 15) * 100)}%</strong>
          </h1>
        </div>
        <div className='question'>
          <div className='noOfQuestions'>
            <div>
              <h3>
                <strong>Total number of questions</strong>
              </h3>
            </div>
            <div>
              <h3>
                <strong>15</strong>
              </h3>
            </div>
          </div>
          <div className='noOfQuestions'>
            <div>
              <h3>
                <strong>Number of attempted questions</strong>
              </h3>
            </div>
            <div>
              <h3>
                <strong>{attemptedCount}</strong>
              </h3>
            </div>
          </div>
          <div className='noOfQuestions'>
            <div>
              <h3>
                <strong>Number of correct answers</strong>
              </h3>
            </div>
            <div>
              <h3>
                <strong>{score}</strong>
              </h3>
            </div>
          </div>
          <div className='noOfQuestions'>
            <div>
              <h3>
                <strong>Number of wrong answers</strong>
              </h3>
            </div>
            <div>
              <h3>
                <strong>{attemptedCount - score}</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='btns'>
        <div>
          <NavLink to='/Quiz'>
            <button className='playAgainBtn'>Play Again</button>
          </NavLink>
        </div>
        <div>
          <NavLink to='/'>
            <button className='backBtn'>Back to home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ResultComponent;