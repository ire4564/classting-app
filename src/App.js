import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div className="App">
      <div class="Container">
      <BrowserRouter>
        <Switch>
          {/*<Route exact={true} path="/" component={Home}/>*/}
          <Route path="/quiz" component={QuizPage} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
