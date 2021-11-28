import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import Cursor from './Cursor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
      </div>
      <Cursor />
    </BrowserRouter>
  );
}

export default App;
