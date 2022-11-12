import React from "react"
import logo from './logo.svg';
import './App.css';
import './components/SearchApps'
import SearchApps from "./components/SearchApps";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import Header from './components/Header';
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
      <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/searchapps" element={<SearchApps
          apps={appsData}
        />}
        />
    </Routes>
    <Menu/>
    </div>
  );
}

export default App;
