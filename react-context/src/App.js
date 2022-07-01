import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./shared/Header";
import AboutMovie from "./pages/AboutMovie";
import Series from "./pages/Series";
function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/movies" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<AboutMovie />} />
      </Routes>
    </div>
  );
}

export default App;
