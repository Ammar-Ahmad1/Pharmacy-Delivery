import {Routes, Route} from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>

         </div>
  );
}

export default App;
