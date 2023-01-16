import React from "react";
import "./App.css";
import {  Routes, Route} from 'react-router-dom'
import Register from "./containers/auth/register";
import Login from "./containers/auth/login";
import UserDashboard from "./containers/user/userDashboard";
import RiderDashboard from "./containers/rider/riderDashboard";
import AdminDashboard from "./containers/admin/adminDashboard";
import NavBar from "./components/navBar";
import Items from "./containers/sharedScreens/items"
import { useSelector } from "react-redux";

function App() {
  const {role} =useSelector(state=>state.user)
    if(role==='rider'){
      return <><NavBar/><RiderScreens/></>
    }else if(role === 'user'){
      return <><NavBar/><UserScreens/></>
    }else if(role === 'admin'){
    return <><NavBar/><AdminScreens/></>
    }
      return <AuthScreens/>
}

const AuthScreens = () => {
  return (
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Login />} />
  </Routes>
  )
}

const AdminScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<AdminDashboard />} />
    <Route exact path="/items" element={<Items />} />
    </Routes>
  )
}

const UserScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<UserDashboard />} />
    </Routes>
  )
}

const RiderScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<RiderDashboard/>} />
  </Routes>
  )
}
export default App


