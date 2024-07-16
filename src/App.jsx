import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Navbar from "./components/user/Navbar";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import EmailVerification from "./components/auth/EmailVerification";
import ForgotPassword from "./components/auth/ForgotPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forget-password" element={<ForgotPassword />} />
        <Route path="/auth/confirm-password" element={<ConfirmPassword />} />
      </Routes>
    </>
  );
}

export default App;
