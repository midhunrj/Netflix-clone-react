import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner/banner';
import Rowpost from './components/rowpost';
import { originals,action,comedy, toprated } from './components/urls';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
<Header/>
<Banner/>
<Rowpost url={originals} title='Netflix Originals'/>
<Rowpost url={action} title='Action Movies' isSmall />
<Rowpost url={toprated} title='Top rated Movies' isSmall />
<Rowpost url={comedy} title='Comedy Movies' isSmall/>
    </div>
  );
}

export default App;
