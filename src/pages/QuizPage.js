import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

//component
import CheckBox from '../components/CheckBox';
import Quiz from '../components/Quiz';
import NextButton from '../components/NextButton';

function QuizPage() {
  return (
    <div className="Main">
      <div class="Container">
      <div class="row">
        {/*Logo*/}
        <div class="col-sm-12" className="LogoArea">
          <img src="https://about.classting.com/images/classting_logo.png" className="App-logo"/>
        </div>
        {/*Content(Quiz)*/}
        <div class="col-sm-12" className="ContentArea">
          <Quiz/>
        </div>
        {/*Button(check)*/}
        <div class="col-sm-12" className="SelectArea">
          <CheckBox/>
          <NextButton/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default QuizPage;
