import "./App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Content from "./Content/Content.jsx";
import UsersContainer from "./Users/UsersContainer";
import DialogsContainer from "./Content/Dialogs/DialogsContainer"
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div>
          <Route path="/profile" render={ () => <Content/>}/>
          <Route path="/dialogs" render={ () => <DialogsContainer/>} />
          <Route path="/users" render={ () => <UsersContainer/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
