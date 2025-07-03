import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Authentication from "./Pages/Authentication/Authentication";
import Message from "./Pages/Message/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/message" element={<Message/>} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
