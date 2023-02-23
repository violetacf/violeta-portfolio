import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from '../About/About.js';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import NavBar from '../NavBar/NavBar';
import CreatedBy from '../Created/Created';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<MyPortfolio />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <CreatedBy />
      </BrowserRouter>
    </div>
  );
}

export default App;
