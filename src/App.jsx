import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Layout from "./components/Layout";
import AboutUs from "./Pages/AboutUs";

import CollegeDashboard from "./College/ClgDashboard";
import ClgLayout from "./College/ClgLayout";
import ClgStudent from "./College/ClgStudent";
import ClgSessions from "./College/ClgSessions";
import ClgCounselors from "./College/ClgCounselors";

import CnlLayout from "./Counsellor/CnlLayout";
import CnlDashboard from "./Counsellor/CnlDashboard";

import PsyLayout from "./Psychiatrist/PsyLayout";
import PsyDashboard from "./Psychiatrist/PsyDashboard";

import StdLayout from "./Students/StdLayout";
import StdDashboard from "./Students/StdDashboard";
import StdSessions from "./Students/StdSessions";
import StdProfile from "./Students/StdProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>

        <Route path="/college" element={<ClgLayout />}>
          <Route path="dashboard" element={<CollegeDashboard />} />
          <Route path="students" element={<ClgStudent />} />
          <Route path="sessions" element={<ClgSessions />} />
          <Route path="counselors" element={<ClgCounselors />} />
        </Route>

        <Route path="/counsellor" element={<CnlLayout />}>
          <Route path="dashboard" element={<CnlDashboard />} />
        </Route>

        <Route path="/psychiatrist" element={<PsyLayout />}>
          <Route path="dashboard" element={<PsyDashboard />} />
        </Route>

        <Route path="/student" element={<StdLayout />}>
          <Route path="dashboard" element={<StdDashboard />} />
          <Route path="profile" element={<StdProfile />} />
          <Route path="sessions" element={<StdSessions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
