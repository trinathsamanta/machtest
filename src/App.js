import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Department from './Department';
import Employee from './Employee';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }} to="/employee">Employee</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }} to="/department">Department_List</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/department" component={Department} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
