import "./App.css";
import ironlogo from "../images/ironhack-logo.svg";
import menutop from "../images/menu-top.svg";
import reactlogo from "../images/react-logo.svg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Header() {
  const message =
    "You will learn how to use the most popular fronted library, and become a super Ninja developer";
  return (
    <div className="Header">
      <div className="logo_container">
        <img src={ironlogo} className="Ironhack-logo" alt="logo" />
        <img src={menutop} className="Menu-logo" alt="logo" />
      </div>
      <h1>Say hello to ReactJS</h1>
      <div className="react_logo_container">
        <img src={reactlogo} className="react_logo" alt="logo" />
      </div>
      <p>{message}</p>
      <div>
        <button className="button">Awesome!</button>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <div className="Logos">
      <div className="Logos_container">
        <img src={icon1} className="App-logo" alt="logo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="Logos_container">
        <img src={icon2} className="App-logo" alt="logo" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="Logos_container">
        <img src={icon3} className="App-logo" alt="logo" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="Logos_container">
        <img src={icon4} className="App-logo" alt="logo" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Logos />
    </div>
  );
}

export default App;
