import Footer from './components/Footer';

import Navbar from './components/Navbar';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UnsubscribePage from './Pages/UnsubscribePage';
import AnimatedCards from './Pages/AnimatedCards';

function App() {
  return (
    <div className='h-screen items-stretch w-full flex justify-between flex-col gap-2  m-auto '>
      <Navbar />

      <Router>
        <Routes>
          <Route
            path='/'
            element={<AnimatedCards />}
          />
          <Route
            path='/unsubscribe'
            element={<UnsubscribePage />}
          />
        </Routes>
      </Router>

      <Footer showPolicy={true} />
    </div>
  );
}

export default App;
