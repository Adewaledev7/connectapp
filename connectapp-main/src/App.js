import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Homeweb from "./pages/Homeweb.js";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Homeweb />} />
        <Route path="/web/:walletId" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
