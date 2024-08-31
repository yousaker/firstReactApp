import "./App.css";
import Article from "./Article";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Article person="you" email="ssss@kjihu" age="234"></Article>
        <Article person="khg" email="kjhggy@knghftzertyt" age="87654"></Article>
        <Article person="kjhgf" email="swxcvsss@poiuytrd" age="23456"></Article>
      </header>
    </div>
  );
}

export default App;
