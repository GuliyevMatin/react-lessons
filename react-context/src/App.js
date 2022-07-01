import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./shared/Header";
import AboutMovie from "./pages/AboutMovie";
function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<AboutMovie />} />
      </Routes>
    </div>
  );
}

export default App;
