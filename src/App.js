import logo from './logo.svg';
import './App.css';
import { ReactComponent as Logo } from './images/amr.svg';
import React, { useState, useEffect } from 'react';
import ModalPopup from './components/popupmodal';
import classNames from 'classnames';
import {bacterial_answer,resistant_answer,prevent_answer,positive_resistance, tell_doctor} from './constants';
import { bacteria_defensive,how,res_pathogen,key_role } from './physician_constants';
import { Reference } from './components/Reference';
import { referenceData } from './referenceData';
import TrueOrFalseQuiz from './components/trueOrFalse'; // Update the import to match your file name
import quizQuestions from './components/quizquestions'; // Import the common quiz questions
import quizQuestionsPhysicians from './components/quizPhysicians'; // Import physician-specific quiz questions



import doves from './images/doves.png'; // Import the image

const amrLogo = require('./images/amr.svg');

  function App() {
    // Define your tab data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState({});
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([
      {
        question: 'What is bacterial resistance?',
        answer: bacterial_answer,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: "How do I know if I'm resistant?",
        answer: resistant_answer,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: 'What can I do to prevent antibiotic resistance?',
        answer: prevent_answer,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: 'What can be done in case of resistance?',
        answer: positive_resistance,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: 'What should I tell to my physicians about my previous medication?',
        answer: tell_doctor,
        showAnswer: false, // Initialize showAnswer to false
      },
    ]);

    const [activeQuizQuestions, setActiveQuizQuestions] = useState(quizQuestions);

    // Function to handle the tab change
    const handleTabChange = (quizType) => {
      // Update the activeQuizQuestions based on the selected quizType
      if (quizType === 'patients') {
        setActiveQuizQuestions(quizQuestions);
      } else if (quizType === 'physicians') {
        setActiveQuizQuestions(quizQuestionsPhysicians);
      }
    };

    const [questionsAndAnswersPhysicians, setQuestionsAndAnswersPhysicians] = useState([
      {
        question: 'What are the defensive strategies bacteria use to resist antibiotics called?',
        answer: bacteria_defensive,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: "How does antibiotic resistance develop?",
        answer: how,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: 'Some bacterial strains have even become resistant to both first- and second-line antibiotics. Can you name one of the most concerning examples?',
        answer: res_pathogen,
        showAnswer: false, // Initialize showAnswer to false
      },
      {
        question: 'How can you play a key role as a physician/clinician?',
        answer: key_role,
        showAnswer: false, // Initialize showAnswer to false
      },
      
    ]);
    
    
    
    const openModal = (question) => {
      setSelectedQuestion(question);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedQuestion({});
    };
  
    
    const tabData = [
      {
        label: 'Home',
        content: (
          <section className="mt-4">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Welcome to the <b class = 'text-green-500'>AMR platform!</b></h2>
                <p class="text-xl mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                This platform is dedicated to the sharing of microbial resistance knowledge. It invites both healthcare 
                professionals and patients to enhance their understanding through quizzes and delve into additional resources to expand their knowledge. 
                Our objective is to consolidate critical information into a single hub and inspire ongoing exploration.</p>
              </div>

          </section>
        ),
      },
      {
        label: 'For Physicians',
        content: (
          <section className="mt-4">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Information for <b class = 'text-green-500'>physicians</b></h2>
            <div className="relative">
              {/* Add a hero image */}
                {/*
                  <img
                    class="h-auto max-w-full" src={doves} alt="image description"
                  />
                */}
            </div>
            <div class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              <p>We strongly recommend that you contemplate the answers prior to revealing them.</p>
            </div>
            {questionsAndAnswersPhysicians.map((item, index) => (
              <div key={index} className="mt-2">
                <div>
                  <h3 className="font-bold">{item.question}</h3>
                  <button className="text-green-900 bg-green border border-green-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
                    font-medium rounded-full text-sm px-5 py-2.5 mt-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
                    dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() => openModal(item)}
                  >
                    Answer
                  </button>
                </div>
              </div>
            ))}
          </section>
        ),
      },
      {
        label: 'For Patients',
        content: (
          <section className="mt-4">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Information for <b class = 'text-blue-500'>patients</b></h2>
            <div className="relative">
            <div class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              <p>We strongly recommend that you contemplate the answers prior to revealing them.</p>
            </div>
              {/* Add a hero image */}
                {/*
                  <img
                    class="h-auto max-w-full" src={doves} alt="image description"
                  />
                */}
            </div>
            {/* Rest of your content */}
            {questionsAndAnswers.map((item, index) => (
              <div key={index} className="mt-2">
                <div>
                  <h3 className="font-bold ">{item.question}</h3>
                  <button className=" text-blue-900 bg-blue border border-blue-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
                    font-medium rounded-full text-sm px-5 py-2.5 mt-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
                    dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() => openModal(item)}
                  >
                    Answer
                  </button>
                </div>
              </div>
            ))}
          </section>
        ),
      },
      {
        label: 'Question sheet',
        content: (
    <div className="mt-5">
      <div className='mb-5'>
      <h1 className="text-2xl font-semibold">Questions sheets</h1>
      <div class="py-2 lg:py-2 px-2 mx-auto max-w-screen-md">
      <p class = 'mb-6 lg:mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xlmb-8 lg:mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'><i>
          Here you have the option to select from two distinct quizzes. The green one is designed for physicians, while the other is geared towards patients. 
          Your choice will determine the quiz content that is presented to you below.</i></p>
      </div>
        <button
          onClick={() => {
            handleTabChange('physicians');
          }}
          className="bg-green-500 hover:bg-red-700 text-white font-bold py-3 px-2 rounded my-2 mr-2"
        >
          Quiz for Physicians
        </button>
        <button
          onClick={() => {
            handleTabChange('patients');
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded my-3"
        >
          Quiz for Patients
        </button>
      </div>
    </div>
  ),
    },
      {
        label: 'References',
        content: (
          <div>
            <h1 className="text-2xl font-semibold">References</h1>
            <div className="my-4">
              {referenceData.map((reference, index) => (
                <Reference key={index} {...reference} />
              ))}
            </div>
          </div>
        ),
      },
      {
        label: 'About us',
        content: (
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We are researches at the University of Bergen and this information platform is an artifact of a feasability study.
        The research goal is to explore possibilities of sharing knowledge about antimicrobirocial resistance, tailored to suit a clinical department or institution
        which contribues and modifies the text according to the needs and preferences. Developed by Marcus Sannes in collaboration with Ankica Babic.</p>
                <form action="#" class="space-y-8">
                <div>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact us</h2>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
              focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required></input>
              </div>
              <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 
              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="subject matter" required></input>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 
                focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                dark:focus:border-primary-500" placeholder="If you would like to contribute with feedback to the platform, feel free to leave a comment..."></textarea>
              </div>
                </form>
            </div>
          </section>
        ),
      },
    ];
  
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(tabData[0]);
  
    const toggleAnswer = (question) => {
      const updatedQuestions = questionsAndAnswers.map((item) => {
        if (item.question === question.question) {
          return { ...item, showAnswer: !item.showAnswer };
        }
        return item;
      });
      setQuestionsAndAnswers(updatedQuestions); // Update the state
    };

  return (
    
    
    <div className="text-center mt-20">
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <Logo className="w-30 h-30 mr-4" alt="amr" />

          {/* Navigation Buttons */}
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {tabData.map((tab, index) => (
              <li key={index}>
                <button
                  className={classNames({
                    underline: activeTab === tab,
                    'hover:underline': true,
                    'mr-4': true,
                    "text-xl": true
                  })}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      

      {/* Tab content */}
      <div className="p-4">
        <p>{activeTab.content}</p>



        {/* Render the TrueOrFalseQuiz component */}
        {activeTab.label === 'Question sheet' && (
          <TrueOrFalseQuiz questions={activeQuizQuestions} />
        )}
      </div>

      {/* Modal */}
      <ModalPopup
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        question={selectedQuestion.question}
        answer={selectedQuestion.answer}
      />

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr class=" h-10 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://github.com/checkmatemarcus/AMR-Platform" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
    </div>
    

    
  );
}

export default App;
