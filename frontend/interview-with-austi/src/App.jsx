import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Auth/Login"
import SignUp from './pages/Auth/SignUp';
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep"


const App = () => {
  return (
    <div className='text-5xl text-orange-600'>App</div>
  )
}

export default App