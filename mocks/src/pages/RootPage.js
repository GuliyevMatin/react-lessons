import { Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import Home from "./Home";


function RootPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-todo" element={<AddTodo />} />
    </Routes>
  );
}

export default RootPage;
