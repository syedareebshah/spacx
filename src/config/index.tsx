import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import MissionDetail from "../components/MissionDetail";
import MissionList from "../components/MissionList";




const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Router>
        <Header />
        <Routes>
          <Route element={<MissionList />} path="/" />
          <Route element={<MissionDetail />} path="/detail/:got_id" />


          {/* <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Single />} path="/single/:id" />
          <Route element={<Search />} path="/search" />
          <Route element={<FourOFour />} path="/*" /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;