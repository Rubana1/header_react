import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Correct relative path */}
          <Route path="/AboutUs" element={<AboutUs />} /> {/* Correct relative path */}
          <Route path="/ContactForm" element={<ContactForm />} /> {/* Correct relative path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


