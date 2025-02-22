import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
                <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
                <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
                <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
                <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;