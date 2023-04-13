import { Route, Routes } from "react-router-dom";
import "./App.css";
import { History } from "./components/History";
import { Home } from "./components/Home";
import { Member } from "./components/Member";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/Member" element={<Member />} />
      </Routes>

      {/* // <Home /> */}
    </div>
  );
}

export default App;
