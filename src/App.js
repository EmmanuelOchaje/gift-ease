import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import CreAccountPage from "./pages/CreAccountPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import MarketPlacePage from "./pages/MarketPlacePage";
// import Loader from "./components/Loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Loader />} /> */}
        {/* <Route path="creaccount" element={<CreAccount />} /> */}
        <Route path="createaccountpage" element={<CreAccountPage />} />
        <Route path="adminloginpage" element={<AdminLoginPage />} />
        <Route path="forgotpwdpage" element={<ForgotPwdPage />} />
        <Route path="marketplacepage" element={<MarketPlacePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
