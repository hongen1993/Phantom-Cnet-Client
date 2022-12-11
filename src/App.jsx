import { Routes, Route } from "react-router-dom";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import TaskFormPage from "./pages/TaskFormPage/TaskFormPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/users"
          element={
            <IsAnon>
              <UsersPage />
            </IsAnon>
          }
        />

        <Route
          path="/user/:id"
          element={
            <IsAnon>
              <UserDetailsPage />
            </IsAnon>
          }
        />

        <Route
          path="/newTaskcard"
          element={
            <TaskFormPage />
          }
        />

      </Routes>
    </div>
  );
}

export default App;
