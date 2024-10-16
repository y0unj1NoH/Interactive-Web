import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import InfiniteGrid from "./components/InfiniteGrid";
import "./App.css"; // myreset.css

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/infinite-grid" element={<InfiniteGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
