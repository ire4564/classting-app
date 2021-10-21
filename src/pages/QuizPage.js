import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//component
import CheckBox from '../components/CheckBox';
import Quiz from '../components/Quiz';
import NextButton from '../components/NextButton';
//data
import answerData from "../data/answer.json";
import quizData from "../data/quiz.json";

/*set selection*/
function setSelect(number)  {
    //answerData.answer.length => Sample Data length
    let setAnswer = [];
    let isExist = [true, true, true, true];
    let checkReady = 1;
    let radomIndex = Math.floor(Math.random() * (3)) + 0;
    //set radom order
    setAnswer[radomIndex] = quizData.quiz[number].answer;
    isExist[radomIndex] = false;

    while(checkReady !== 4) {
        radomIndex = Math.floor(Math.random() * (answerData.answer.length-1)) + 0;
        var radomData = answerData.answer[radomIndex];
        //new Index => then set AnswerArray
        if(setAnswer.indexOf(radomData) === -1) {
            var index = isExist.indexOf(true);
            setAnswer[index] = radomData;
            isExist[index] = false;
            checkReady++;
        }
    }
    return setAnswer;
}

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ButtonText, setButtonText] = useState("다음 문제");
  const history = useHistory();

  /*check answer*/
  const clickCheckAnswer = () => {
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
          <CheckBox dataSet={setSelect(currentQuestion)}/>
          <NextButton clickFunc={clickCheckAnswer} btnText={ButtonText}/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default QuizPage;
