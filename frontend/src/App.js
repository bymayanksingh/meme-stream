import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";


import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{  width: "100vw"}}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
