/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/users/Home";
import IndexUser from "./pages/users/IndexUser";
import Nilai from "./pages/users/Nilai";

function App() {
  return (
    <div className="App">
      <IndexUser />
      <div className="md:container m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Nilai />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
