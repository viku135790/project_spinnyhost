import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Landingpage/Footer';
import About from './pages/About';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Contact from './pages/Contact';
import Dedicated from './pages/Dedicated';
import Faq from './pages/Faq';
import LandingPage from './pages/LandingPage';
import Legal from './pages/Legal';
import SharedNav from './pages/SharedNav';
import Sharedland from './pages/Sharedland';
import SignUpLogin from './pages/SignUpLogin';
import SearchedDomain from "./Component/Domain/SearchedDomain"

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/Sharedland' element={<Sharedland />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/SharedNav' element={<SharedNav />} />
            <Route path='/CheckOut' element={<CheckOut />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/Legal' element={<Legal />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/SignupLogin' element={<SignUpLogin />} />
            <Route path='/Dedicated' element={<Dedicated />} />
            <Route path='/SearchedDomain' element = {<SearchedDomain />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
