import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Library from "./components/library";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
        </header>
        <main>
          <Routes>
            <Route path="/"/>
              <Route path="/library" element={<Library/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
