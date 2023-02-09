import './css/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import useFetch from '/src/hooks/useFetch';
import ErrorOverlay from '/src/components/ErrorOverlay';
import LoadingOverlay from '/src/components/LoadingOverlay';

function App() {
  const {data: data, isFetching, fetchError} = useFetch('/src/data/data.json');

  return (
    <div className="App">
      <Router>
        {isFetching && !fetchError && <LoadingOverlay />}
        {fetchError && <ErrorOverlay />}
        
        {!isFetching && !fetchError &&
        <div className="app-content">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route exact path="/" element={<About data={data} />} />
            </Routes>
          </main>
          <Footer />
        </div>}
      </Router>    
    </div>
  )
}

export default App
