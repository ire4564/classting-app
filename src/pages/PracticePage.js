import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import QuizPage from './QuizPage';

function PracticePage() {
  let wrongSet = JSON.parse(localStorage.getItem("wrongset"));
  console.log(wrongSet);
  return (
    <div className="Main">
      <div className="Container">
        {wrongSet === 0 ? <p>틀린 문제가 없습니다 :)</p> : <QuizPage wrongArr={wrongSet}/>}  
      </div>
    </div>
  );
}

export default PracticePage;
