import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./Login";
import Home from "./layout/Home";

const App = () => {
  const [userDetail, setUserDetail] = useState(null);

  const updateUserDetails = (updatedData) => {
    setUserDetail(updatedData);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      ></Route>

      <Route
        path="/login"
        element={
          userDetail ? (
            <Navigate to="/dashboard" />
          ) : (
            <AppLayout>
              <Login updateUserDetails={updateUserDetails} />
            </AppLayout>
          )
        }
      ></Route>

      <Route
        path="/dashboard"
        element={userDetail ? <Dashboard /> : <Navigate to="/login" />}
      ></Route>
    </Routes>
  );
};

export default App;
