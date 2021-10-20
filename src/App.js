import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import QuizPage from './pages/QuizPage';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Main}/>
          <Route path="/quiz" component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
