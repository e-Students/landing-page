import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import Navbar from './components/Navbar';
import { data } from './data/Articles.data';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UnsubscribePage from './Pages/UnsubscribePage';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<LandingPage data={data} />}
          />
          <Route
            path='/unsubscribe'
            element={<UnsubscribePage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
