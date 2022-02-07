import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import React from "react";
import NotePage from "./pages/NotePage";

import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
            <Header />
              <PrivateRoute component={HomePage} path="/" exact />
              <Route component = {NotePage} path = "/note" />
              <Route component={LoginPage} path="/login" />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
