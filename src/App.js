import {
    Routes,
    Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/pages/PageNotFound";
import Main from "./components/pages/Main";
import News from "./components/pages/News";
import React from "react";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (
        <Routes>
            <Route element={<Navigation/>}>
                <Route path="/" element={<Main/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="profile" element={
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}

export default App;
