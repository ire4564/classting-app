import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//component
import CheckBox from '../components/CheckBox';
import Quiz from '../components/Quiz';
import Loading from '../components/Loading';
import Timer from '../components/Timer';

/*set selection*/
function setSelect(number, dataSet)  {
    let wrongSet = dataSet[number].incorrect_answers;
    let setAnswer = ["", "", "", ""];
    let index = 0;
    //set radom order
    let radomIndex = Math.floor(Math.random() * (3)) + 0;
    setAnswer[radomIndex] = dataSet[number].correct_answer;
    
    for(var i=0; i<setAnswer.length; i++) {
      if(setAnswer[i] === "") {
        /*error set fix => &~;*/
        let startError = wrongSet[index].indexOf("&");
        let finError = wrongSet[index].indexOf(";");

        if(startError) {
          let fix = wrongSet[index].substr(0, startError);
          fix += wrongSet[index].substr(finError+1, wrongSet[index].length);
          wrongSet[index] = fix;
        }
        setAnswer[i] = wrongSet[index];
        index++;
      }
    }
    return setAnswer;
}

function setQuestion(questionData) {
  /*error set fix => &~; in question*/
  let startError = questionData.indexOf("&");
  let finError = questionData.indexOf(";");

  if(startError) {
    let fix = questionData.substr(0, startError);
    fix += questionData.substr(finError+1, questionData.length);
    questionData = fix;
  }
  return questionData;
}

function QuizPage(props) {
  const [getData, setGetData] = useState([]);

  const [isFinish, setisFinish] = useState(false);
  const [resultText, setResultText] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ButtonText, setButtonText] = useState("다음 문제");
  const [loading, setLoading] = useState("");

  const [correct, setCorrect] = useState([]);
  const [fail, setFail] = useState([]);
  const [wrongSet, setWrongSet] = useState([]);
  
  const history = useHistory();

  //Modal functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  /*load Data*/
  useEffect(() => {
    if(props.wrongArr !== undefined) {
    /*wrong answer note function*/
      if(props.wrongArr.length !== 0) {
        setGetData(props.wrongArr);
      }
    } else {
      /*new quiz loading*/
      const fetchData = async() => {
        try {
          const res = await axios.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple");
          setGetData(res.data.results);
        } catch(e) {
          console.log(e);
        }
      };
      fetchData();
    }
  }, [props.wrongArr]);
  
  /*check correct answer*/
  const isCorrect = () => {
    const correctAnswer = getData[currentQuestion].correct_answer;
    const getSelect = localStorage.getItem("select");
    let isIncorrect = false;
    let resultArr = [];
    
    if(correctAnswer === getSelect) {
      resultArr.push("맞았습니다 :)");
      setCorrect(correct.concat(currentQuestion));
    } else {
      resultArr.push("틀렸습니다 :(");
      isIncorrect = true;
      setFail(fail.concat(currentQuestion));
      setWrongSet(wrongSet.concat(getData[currentQuestion]));
    }
    //change next button text
    if(currentQuestion + 1 === getData.length-1) {
      setButtonText("결과 보기");
    }
    //set result Text in Modal
    resultArr.push(getData[currentQuestion].question);
    resultArr.push(correctAnswer);

    if(isIncorrect === true) resultArr.push(getSelect);
    
    setResultText(resultArr);
    setShow(true);
    
    return true;
  }

  const LifeCycle = () => {
    React.useEffect(() => {
      localStorage.setItem("correct", correct);
      localStorage.setItem("fail", fail);
      localStorage.setItem("wrongset", JSON.stringify(wrongSet));
    });
    return true;
  };

  /*check logic*/
  const clickCheckAnswer = () => {
    if(currentQuestion < getData.length-1) {
      //pass next question
      isCorrect();
      setCurrentQuestion(currentQuestion + 1);
    } else if(currentQuestion === getData.length-1){
      //finial page
      isCorrect();
      setisFinish(true);
      setLoading("none");
      setTimeout(() =>
        history.push("result")
      , 1000);
    } 
  }

  return (
    <div className="QuizPage">
      <div className="Container">
      <div className="row">
        {/*Logo*/}
        <div className="col-sm-12 LogoArea">
          <img src="https://about.classting.com/images/classting_logo.png" className="App-logo" alt="profile"/>
          <Timer mm="0" ss="0" stop={isFinish}/>
        </div>
        {/*Content(Quiz)*/}
        <div className="col-sm-12 ContentArea">
          {getData.length !== 0 ? <Quiz question={setQuestion(getData[currentQuestion].question)}/> : ""}
        </div>
        <div className="Loding">
          {loading === "none" ? <Loading/> : 
          <p className="contentText"> <b>{currentQuestion}</b> / {getData.length}</p>}
        </div>
        {/*Button(check)*/}
        <div className="col-sm-12 SelectArea">
        {getData.length !== 0 ? <CheckBox 
            dataSet={setSelect(currentQuestion, getData)} 
            setNext={currentQuestion} 
            canClick={loading}
            clickFuncs={clickCheckAnswer}
            btnTexts={ButtonText}
          /> : ""}
        </div>
        <LifeCycle/>
        {/*Modal*/}
        <Modal
          animation={false} /*fix error*/
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="ModalStyle"
        >
        <Modal.Header>
        <Modal.Title>{resultText[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalInner">
            <p className="CheckQuestion">{resultText[1]}</p>
            <b><p className="CheckAnswer">{resultText[2]}</p></b>
            <b><p className="MyAnswer">{resultText[3]}</p></b>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            다음 문제 풀기
        </Button>
        </Modal.Footer>
        </Modal>
        </div>
        </div>
    </div>
  );
}

export default QuizPage;
