import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//data
import quizData from "../data/quiz.json";

//component
import CheckBox from '../components/CheckBox';
import Quiz from '../components/Quiz';
import NextButton from '../components/NextButton';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ButtonText, setButtonText] = useState("다음 문제");
  const history = useHistory();

  const clickNextButton = () => {
    if(currentQuestion < quizData.quiz.length-1) {
      const updateQuestion = currentQuestion + 1;
      setCurrentQuestion(updateQuestion);
      if (updateQuestion === quizData.quiz.length-1) {
        setButtonText("결과 보기");
      }
    } else {
      history.push("result")
    } 
  }

  return (
    <div className="QuizPage">
      <div className="Container">
      <div className="row">
        {/*Logo*/}
        <div className="col-sm-12 LogoArea">
          <img src="https://about.classting.com/images/classting_logo.png" className="App-logo"/>
        </div>
        {/*Content(Quiz)*/}
        <div className="col-sm-12 ContentArea">
          <Quiz
          question={quizData.quiz[currentQuestion].question}/>
        </div>
        {/*Button(check)*/}
        <div className="col-sm-12 SelectArea">
          <CheckBox questionNum="1"/>
          <NextButton clickFunc={clickNextButton} btnText={ButtonText}/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default QuizPage;
