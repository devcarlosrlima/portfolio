import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
