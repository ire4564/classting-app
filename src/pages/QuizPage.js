import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

//component
import CheckBox from '../components/CheckBox';
import Quiz from '../components/Quiz';
import NextButton from '../components/NextButton';

function QuizPage() {
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
          <Quiz/>
        </div>
        {/*Button(check)*/}
        <div className="col-sm-12 SelectArea">
          <CheckBox/>
          <NextButton btnText="다음 문제로"/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default QuizPage;
