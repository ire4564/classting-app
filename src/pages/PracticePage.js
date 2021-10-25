import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

//page
import QuizPage from './QuizPage';
import WrongNone from './WrongNone';

function PracticePage() {
  let wrongSet = JSON.parse(localStorage.getItem("wrongset"));

  return (
    <div className="Main">
      <div className="Container">
        {wrongSet.length === 0 ? <WrongNone/> : <QuizPage wrongArr={wrongSet}/>}  
      </div>
    </div>
  );
}

export default PracticePage;
