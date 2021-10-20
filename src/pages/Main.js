import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function Main() {
  return (
    <div className="App">
      <div class="Container">
      <div class="row">
        <div class="col-sm-12" className="LogoArea">
          <img src="https://about.classting.com/images/classting_logo.png" className="App-logo"/>
        </div>
        <div class="col-sm-12" className="ContentArea">
          <p>content</p>
        </div>
        <div class="col-sm-12" className="ButtonArea">
          <p>button</p>
        </div>
      </div>
</div>
    </div>
  );
}

export default App;
