import logo from "./logo.svg";
import "./App.css";
import Exercise from "./Exercise";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo} alt="logo" width={"600px"} />
      <Exercise
        studentId="101412150"
        name="Aadi Badola"
        college="George Brown College, Toronto"
      />
    </div>
  );
}

export default App;
