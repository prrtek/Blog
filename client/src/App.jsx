import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className='p-10  m-0'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
