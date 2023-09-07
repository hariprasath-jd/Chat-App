import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ChatApp from "./components/ChatApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={
            <>
            <NavBar />
              <div style={{ height: '100svh' }} className=" d-flex justify-content-center">
                <LoginPage />
              </div>
            </>
          } />
          <Route path="/home" element={
            <div className="bg-dark position-absolute top-0 start-0 bottom-0 end-0 text-light" >
              <ChatApp />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
