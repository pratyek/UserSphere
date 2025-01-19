import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { UserProvider } from "./context/UserContext";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        {/* Updated Header */}
        <header className="bg-primary text-white py-3">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="mb-0 fs-3 fw-bold">USERSHPERE</h1>
            <button className="btn btn-light btn-sm">Light Mode</button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
