import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Enrollment from './components/Enrollment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header /> {/* Always shown */}
      <Routes>
        <Route path="/enrollment" element={<Enrollment />} />
      </Routes>
      <Footer /> {/* Always shown */}
    </Router>

  );
}

export default App;
