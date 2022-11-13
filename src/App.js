import React from "react"
import logo from './logo.svg';
import './App.css';
import './components/SearchApps'
import AppSearch from "./pages/AppSearch";
import HomePage from "./pages/HomePage";
import Tutorials from "./pages/Tutorials"
import { Route, Routes } from "react-router-dom"

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
        </Routes>
        </div>
    </div>
  );
}

export default App;
