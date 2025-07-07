import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Authorization from "./pages/AuthorizationPage/Authorization";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Quests from "./pages/Quests";
import Registration from "./pages/RegistrationPage/Registration";
import PlacePage from "./pages/PlacePage/PlacePage";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/authorization" element={<Authorization />} />
                        <Route path="/register" element={<Registration />} />
                        <Route path="/place/:id" element={<PlacePage />} />

                        <Route
                            path="/quests"
                            element={
                                <ProtectedRoute>
                                    <Quests />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/favorites"
                            element={
                                <ProtectedRoute>
                                    <Favorites />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
