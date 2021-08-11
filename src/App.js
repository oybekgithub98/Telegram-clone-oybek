import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';
import { useStateValue } from './StateProvider';
import Default from './pages/Default';
import { Detector } from "react-detect-offline";

function App() {
  const [user] = useStateValue(null);

  return (
    <Router>
      <div className="app">

        <Detector className="detect"
          render={({ online }) => (
            <div className={online ? "normal show" : "warning show"}>
              Siz {online ? <span>online</span> : "offline"}dasiz
            </div>
          )}
        />

        <Switch>
          {
            !user?.user ?
              <Route path="/Login" exact component={() => <Login />} />
              :
              <Route exact path="/:userId" component={Home} />
          }

          <Route exact path="/signup" component={() => <SignUp />} />
          <Route exact path="/" component={() => <Default />} />
        </Switch>

      </div>
    </Router>
  )
}

export default App;