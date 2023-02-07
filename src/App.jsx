import './css/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>    
    </div>
  )
}

export default App
