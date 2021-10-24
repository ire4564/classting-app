import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Main from './pages/Main';
import PracticePage from './pages/PracticePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Router>
          <Route exact={true} path="/" component={Main}/>
          <Route path="/quiz" component={QuizPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/practice" component={PracticePage} />
        </Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
