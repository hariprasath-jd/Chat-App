<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> chat/master
  );
}

export default App;
