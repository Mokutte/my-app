import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div>
          <Route path="/Profile" component={Content} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
