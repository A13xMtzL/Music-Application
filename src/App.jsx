import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Element404 from './components/Element404';
import { NavBar } from './components/layout/Navbar';
import AboutPage from './pages/AboutPage';
import AllCourses from './pages/AllCourses';
import CoursePage from './pages/CoursePage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import ConditionalFooter from './components/layout/ConditionalFooter';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />{/*---> Se cambia por el archivo de inicio */}
          <Route path="/guitar" element={<CoursePage />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<Element404 />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </>
  );
}

export default App