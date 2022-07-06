import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Counter from './components/counter';
import Basket from "./components/e-commerce/Basket";
import Home from "./components/e-commerce/Home";
// import Profile from "./components/Profile";
import Header from "./shared/header";

function App() {
  return (
    <div className="App">
      {/* ------Topic 11 examples 1 */}
      {/* <Counter/> */}
      {/* Topic 12 Examples 2 */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Topic 11 examples 3 */}
      {/* <Profile/> */}
      
    </div>
  );
}

export default App;
