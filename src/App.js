import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import data from "./data";
import {Route,Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import {useState} from "react";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [tours,setTours] = useState(data);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/contact"/>
          <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>        
            <Dashboard/> 
          </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
