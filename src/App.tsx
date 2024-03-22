import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import Navbar from './components/Navbar';
import { data } from './data/Articles.data';
function App() {
  return (
    <>
      <Navbar />
      <LandingPage data={data} />
      <Footer />
    </>
  );
}

export default App;
