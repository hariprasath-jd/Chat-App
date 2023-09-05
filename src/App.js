import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ChatApp from "./components/ChatApp";


function App() {
  return (
    <div className="bg-dark position-absolute top-0 start-0 bottom-0 end-0 text-light" >
      <ChatApp />
    </div>
  );
}

export default App;
