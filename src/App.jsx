// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Router } from "react-router-dom";
import NavHeader from './components/NavHeader';
import Home from './containers/Home';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import { createBrowserHistory } from 'history'

function App() {
  const newHistory = createBrowserHistory();

  return (
      <div>
        <NavHeader />
        <div className="container mt-3">
          <Router history={newHistory}>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login}  />
              <Route path="/dashboard" component={Dashboard} />

              {/*<Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} /> */}
            </Switch>
          </Router>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
  );
}

export default App;
