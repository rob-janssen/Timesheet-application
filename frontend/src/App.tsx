import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Timesheets from "./pages/Timesheets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/timesheets" element={<Timesheets />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
