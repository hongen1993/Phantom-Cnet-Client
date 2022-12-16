import { Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import HomePage from "./pages/HomePage/HomePage"
import SignupPage from "./pages/SignupPage/SignupPage"
import LoginPage from "./pages/LoginPage/LoginPage"

import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage"
import UserProjectsPage from "./pages/UserProjectsPage/UserProjectsPage"
import UserProjectPage from "./pages/UserProjectPage/UserProjectPage"

import AdminGetUsersPage from "./pages/AdminGetUsersPage/AdminGetUsersPage"
import AdminGetUserPage from "./pages/AdminGetUserPage/AdminGetUserPage"

import IsAdmin from "./components/IsAdmin/IsAdmin"
import IsPrivate from "./components/IsPrivate/IsPrivate"
import IsAnon from "./components/IsAnon/IsAnon"

function App() {
  return (
    <div className="App">
      <Routes>

        <Route
          path="/"
          element={
            <HomePage />
          } />

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
          path="/profile/edit/:id"
          element={
            <IsPrivate>
              <ProfileEditPage />
            </IsPrivate>
          }
        />

        <Route
          path="/projects"
          element={
            <IsPrivate>
              <UserProjectsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/project/:id"
          element={
            <IsPrivate>
              <UserProjectPage />
            </IsPrivate>
          }
        />

        <Route
          path="/users"
          element={
            <IsAdmin>
              <AdminGetUsersPage />
            </IsAdmin>
          }
        />

        <Route
          path="/user/:id"
          element={
            <IsAdmin>
              <AdminGetUserPage />
            </IsAdmin>
          }
        />

      </Routes>
    </div>
  )
}

export default App
