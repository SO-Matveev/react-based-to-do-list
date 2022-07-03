import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="Home">Главная страница</Link>
          </li>
          <li>
            <Link to="/Todo">Список</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
