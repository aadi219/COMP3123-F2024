import logo from "./logo.svg";
import Welcome from "./Welcome.js";
import Greeting from "./Greeting.js";
import SayHello from "./SayHello.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="gbc"/>
        <SayHello fname="aadi" lname="badola" />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
