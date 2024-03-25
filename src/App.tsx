import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';

import Navbar from './components/Navbar';
import { data } from './data/Articles.data';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UnsubscribePage from './Pages/UnsubscribePage';
//import AnimatedCards from './Pages/AnimatedCards';

function App() {
  return (
    <div className='h-screen items-stretch w-full flex justify-center flex-col gap-2 py-36 m-auto bg-primary'>
      <Navbar />

      <Router>
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
      </Router>

      <Footer />
    </div>
  );
}

export default App;
