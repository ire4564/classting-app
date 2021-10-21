import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ResultPage() {
  return (
    <div className="ResultPage">
        <div className="Container">
        <div className="row">
            {/*Logo -> 나중에 로고 중복 정리하기*/}
            <div className="col-sm-12 LogoArea">
            <img src="https://about.classting.com/images/classting_logo.png" className="App-logo"/>
            </div>
            <Link to="/">
                <Button variant="secondary" size="lg" className="StartBtn">시작 화면으로</Button>
            </Link>
            <p>FINISH</p>
        </div>
        </div>
    </div>
  );
}

export default ResultPage;
