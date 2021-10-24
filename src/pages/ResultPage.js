import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

//components
import Chart from '../components/Chart';

function ResultPage() {
  let resultAnswer = localStorage.getItem("correct");
  let resultFail = localStorage.getItem("fail");
  const resultTime = localStorage.getItem("time");

  resultAnswer = resultAnswer === "" ? 0 : resultAnswer.split(",").length
  resultFail = resultFail === "" ? 0 : resultFail.split(",").length
  return (
    <div className="ResultPage">
        <div className="Container">
        <div className="row ContextAlign">
            {/*Logo -> 나중에 로고 중복 정리하기*/}
            <div className="col-sm-12 LogoArea">
            <img src="https://about.classting.com/images/classting_logo.png" className="App-logo" alt="profile"/>
            </div>
            {/*result page*/}
            <div className="ResultSpace">
              <b><p>FINISH Time</p></b>
              </div>
              <div className="ResultSpace">
              <p>{resultTime}</p>
              </div>
              <div className="ResultSpace">
              <p>맞은 문제 <b>{resultAnswer}</b> 개</p>
              </div>
              <div className="ResultSpace">
              <p>틀린 문제 <b>{resultFail}</b> 개</p>
            </div>
            <div className="ChartSpace">
              <Chart correct={resultAnswer} wrong={resultFail}/>
            </div>
            <div className="ButtonSpace">
              {/*go start button*/}
              <Link to="/quiz">
                  <Button variant="secondary" size="lg" className="StartBtn">다시 풀기</Button>
              </Link>
              <Link to="/practice">
                  <Button variant="secondary" size="lg" className="StartBtn">오답 노트</Button>
              </Link>
            </div>
        </div>
        </div>
    </div>
  );
}

export default ResultPage;
