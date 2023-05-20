import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chatpage from "./component/Chatpage";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
