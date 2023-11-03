import React, { useState, useEffect } from 'react';
import Modal from './modal';
import quizQuestions from './quizquestions'; // Import the common quiz questions
import quizQuestionsPhysicians from './quizPhysicians'; // Import physician-specific quiz questions



function TrueOrFalseQuiz({ questions, activeQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [reference, setReference] = useState('');
  const [showMotivatingMessage, setShowMotivatingMessage] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(true);

  useEffect(() => {
    // Handle changes to the questions or activeQuiz props
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsExplanationOpen(false);
    setExplanation('');
    setReference('');
    setShowMotivatingMessage(false);
    setLastAnswerCorrect(true);
  }, [questions, activeQuiz]);

  const closeExplanation = () => {
    setIsExplanationOpen(false);
  };

  const showExplanation = (explanationText, referenceText) => {
    setIsExplanationOpen(true);
    setExplanation(explanationText);
    setReference(referenceText);
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setShowMotivatingMessage(true);
      setLastAnswerCorrect(true);
    } else {
      setShowMotivatingMessage(true);
      setLastAnswerCorrect(false);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    showExplanation(
      questions[currentQuestion].explanation,
      questions[currentQuestion].reference
    );
  };

  return (
    <div>
      {showScore ? (
        <div>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div class = 'mx-auto max-w-screen-md text-xl'>{questions[currentQuestion].question}</div>
          <button
            onClick={() => {
              handleAnswer(true);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-5"
          >
            True
          </button>
          <button
            onClick={() => {
              handleAnswer(false);
            }}
            className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            False
          </button>
          {showMotivatingMessage && (
            <div className={`mt-3 font-bold ${lastAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {lastAnswerCorrect ? 'Great job! You got it right!' : 'Oops! That\'s incorrect.'}
            </div>
          )}
          <Modal
            isOpen={isExplanationOpen}
            onRequestClose={closeExplanation}
            explanation={explanation}
            reference={reference}
          />
        </>
      )}
      {/* Render the appropriate quiz component based on the activeQuiz */}
      {activeQuiz === 'patients' && (
        <TrueOrFalseQuiz questions={quizQuestions} activeQuiz={activeQuiz} />
      )}
      {activeQuiz === 'physicians' && (
        <TrueOrFalseQuiz questions={quizQuestionsPhysicians} activeQuiz={activeQuiz} />
      )}
    </div>
  );
}

export default TrueOrFalseQuiz;
