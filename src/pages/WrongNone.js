import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

import QuizPage from './QuizPage';

function WrongNone() {
  return (
    <div className="Main">
       <div className="Container">
        <div className="row ContextAlign">
            <div className="col-sm-12 LogoArea">
            <img src="https://about.classting.com/images/classting_logo.png" className="App-logo" alt="profile"/>
            </div>
            <p>틀린 문제가 없어요 :)</p>
            <Link to="/">
                <Button variant="secondary" size="lg" className="StartBtn">돌아가기</Button>
            </Link>
        </div>
        </div>
    </div>
  );
}

export default WrongNone;
