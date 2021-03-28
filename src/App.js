
import './App.css';
import Speciality from "./Speciality/Speciality";
import Issue from "./Issue/Issue";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import homepage from "./homepage/homepage";

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/registration" component={homepage} exact />
          <Route path="/" component={homepage} exact />
          <Route path="/Issue" component={Issue} exact />
          <Route path="/Speciality" component={Speciality} exact />
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
