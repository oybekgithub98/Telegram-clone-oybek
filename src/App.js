import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  const user = true;

  return (
    <Router>
      <div className="app">
        <Switch>

          {
            !user ?
              <Route path="" exact component={() => <Login />} />
              :
              <Route exact path="/" component={() => <Home />} />
          }

          <Route exact path="/signup" component={() => <SignUp />} />
          <Route exact path="/:userId" component={Home} />





        </Switch>

      </div>
    </Router>
  )
}

export default App;