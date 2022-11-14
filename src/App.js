import React from "react"
import logo from './logo.svg';
import './App.css';
import './components/SearchApps'
import AppSearch from "./pages/AppSearch";
import HomePage from "./pages/HomePage";
import Tutorials from "./pages/Tutorials"
import User from "./pages/User";
import Sessions from "./pages/User/existing"
import Confirm from "./pages/User/confirm"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Registration from "./pages/Registration"


function App() {
  const [appsData, setAppsData] = React.useState([])
  React.useEffect(() => {
    fetch('./apps.json')
      .then(res => res.json())
      .then((data) => {
        setAppsData(data)
      })
  }, [])
  return (
    <div className="App">
      <div className="sub">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<AppSearch/>}/>
          <Route path="/tutorials" element={<Tutorials/>}/>
          <Route path="/session" element={<Tutorials/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/sessions" element={<Sessions/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
