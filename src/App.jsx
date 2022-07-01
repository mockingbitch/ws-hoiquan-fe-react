import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import NavHeader from './components/NavHeader';
import Home from './containers/Home';
import Login from './containers/Login';

function App() {
  return (
      <div>
        <NavHeader />
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            {/*<Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
  );
}

export default App;
