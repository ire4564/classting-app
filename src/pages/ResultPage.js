import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ResultPage() {
  const resultAnswer = localStorage.getItem("correct");
  const resultFail = localStorage.getItem("fail");
  const resultTime = localStorage.getItem("time");

  return (
    <div className="ResultPage">
        <div className="Container">
        <div className="row ContextAlign">
            {/*Logo -> 나중에 로고 중복 정리하기*/}
            <div className="col-sm-12 LogoArea">
            <img src="https://about.classting.com/images/classting_logo.png" className="App-logo"/>
            </div>
            <div className="BlankSpace"> </div>
            {/*go start button*/}
            <Link to="/">
                <Button variant="secondary" size="lg" className="StartBtn">다시 풀기</Button>
            </Link>
            <Link to="/">
                <Button variant="secondary" size="lg" className="StartBtn">오답 노트</Button>
            </Link>
            <div className="BlankSpace"> </div>
            {/*result page*/}
            <div className="ResultSpace">
              <b><p>FINISH Time</p></b>
              <p>{resultTime}</p>
            </div>
            <div className="ResultSpace">
              <p>맞은 문제 <b>{resultAnswer === "" ? 0 : resultAnswer.split(",").length}</b> 개</p>
            </div>
            <div className="ResultSpace">
              <p>틀린 문제 <b>{resultFail === "" ? 0 : resultFail.split(",").length}</b> 개</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default ResultPage;
