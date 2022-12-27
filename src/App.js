import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboar" element={<Dashboard />} />
          <Route path="*" element={<h1> 404 Page Not Found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
