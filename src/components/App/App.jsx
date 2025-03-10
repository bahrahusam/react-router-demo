import { Routes, Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Dashboard from '../Dashboard/Dashboard';
import Reviews from '../Reviews/Reviews'
import AboutMe from '../AboutMe/AboutMe'
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
