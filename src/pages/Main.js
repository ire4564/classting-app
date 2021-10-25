import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Main() {
  return (
    <div className="Main">
        <div className="Container">
            <div className="row">
                {/*Logo*/}
                <div className="col-sm-12">
                <img src="https://about.classting.com/images/classting_logo.png" className="App-logo" alt="profile"/>
                </div>
                <div className="BlankSpace"> </div>
                <Link to="/quiz">
                    <Button variant="secondary" size="lg" className="StartBtn">퀴즈 풀기 시작</Button>
                </Link>
                <Link to="/practice">
                    <Button variant="secondary" size="lg" className="StartBtn">오답 노트</Button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Main;
