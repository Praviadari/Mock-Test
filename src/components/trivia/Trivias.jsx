import React from "react";
import questions from "../questions.json";
import isEmpty from "../utils/is-empty";
import M from "materialize-css";

class Trivias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      currentQuestionIndex  : 0,
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestion: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      time: {},
    };
  }

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion } =
      this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    M.AutoInit();
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion && currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        answer,
        numberOfQuestions: questions.length,
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer?.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };

  correctAnswer = () => {
    M.toast({
      html: "Correct Answer",
      classes: 'toast-valid',
      displayLength: 1500
    });
    this.setState(preState => ({
      score: preState.score + 1,
      correctAnswers: preState.correctAnswers + 1,
      numberOfAnsweredQuestion: preState.numberOfAnsweredQuestion + 1,
      currentQuestionIndex: preState.currentQuestionIndex + 1,
    }), () => {
      this.displayQuestions();
    });
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer",
      classes: 'toast-invalid',
      displayLength: 1500
    });
    this.setState(preState => ({
      wrongAnswers:preState.wrongAnswers + 1,
      currentQuestionIndex: preState.currentQuestionIndex + 1,
      numberOfAnsweredQuestion: preState.numberOfAnsweredQuestion + 1,
    }),() => {
      this.displayQuestions();
    });
  };

  render() {
    const { currentQuestion } = this.state;
    return (
      <div className="h-60  ">
        <div className="flex justify-between">
          <span>Question No: 1</span>
          <div className="timer w-20 h-20 rounded-full border-4 flex items-center justify-center font-bold">
            30
          </div>
        </div>
        <div className="trivia  flex flex-col items-start justify-around">
          <div className="question w-4/5   p-5 text-xl rounded-md ">
            {currentQuestion && currentQuestion.question}
          </div>
          <ul class="w-48 text-sm ml-5 font-medium text-gray-900 bg-blue-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                ></input>
                <label
                  onClick={this.handleOptionClick}
                  for="list-radio-license"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {currentQuestion && currentQuestion.optionA}{" "}
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  onClick={this.handleOptionClick}
                  for="list-radio-id"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {currentQuestion && currentQuestion.optionB}
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-millitary"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  onClick={this.handleOptionClick}
                  for="list-radio-millitary"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {currentQuestion && currentQuestion.optionC}
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  onClick={this.handleOptionClick}
                  for="list-radio-passport"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {currentQuestion && currentQuestion.optionD
                    ? currentQuestion.optionD
                    : "Praveen option ledu"}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Trivias;
