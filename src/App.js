import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
// import Footers from './components/footer'
import HomePage from './components/Hom';
import AdmissionForm from './components/Form';
import TeamPage from './components/images/team';
import IndividualPortfolio from './components/portfolio';
import Courses from './components/courses';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/courses" element={<Courses />} />

        {/* Add more routes for other pages */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:person" element={<IndividualPortfolio />} />
      </Routes>
      {/* <Footers /> */}
    </BrowserRouter>
  );
}

export default App;
