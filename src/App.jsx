import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import './utils/colors.css';
import './i18n';
import ProtectedRouteWrapper from './components/ProtectedRoutesWrapper';
import TermsAndConditions from './pages/Terms';

import Explore from './pages/Explore';
import Latest from './pages/Functionalities/Latest';
import MovieSuggestion from './pages/Functionalities/SuggestedMovie';
import MovieQuestionForm from './pages/Functionalities/FAQ';

import PricingBasic from './pages/PricingBasic';
import PricingPro from './pages/PricingPro';
import PricingEnterprice from './pages/PricingEnterprice'
import DashboardC from './pages/DashboardC';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/admin/*" element={<DashboardC />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/faq" element={<MovieQuestionForm />} />
              <Route path="/latest-movies" element={<Latest />} />
              <Route path="/suggested-movie" element={<MovieSuggestion />} />
    
         
              <Route path="/basic" element={<PricingBasic />} />
               <Route path="/pro" element={<PricingPro />} />
               <Route path="/enterprise" element={<PricingEnterprice />} />
{/*              
              <Route path="/giveorgans" element={< ProtectedRouteWrapper Component={GiveOrgan} />} />
              <Route path="/receiveorgans" element={< ProtectedRouteWrapper Component={OrganRequestForm} />} />
              <Route path="/faq" element={<ProtectedRouteWrapper Component={OrganTransplantFAQ} />} />
              */}


            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;