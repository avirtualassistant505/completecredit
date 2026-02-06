import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from './components/Analytics';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Funding } from './pages/Funding';
import { CreditRepair } from './pages/CreditRepair';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/credit-repair" element={<CreditRepair />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
