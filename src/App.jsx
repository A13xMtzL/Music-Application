import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Element404 from './components/Element404';
import { NavBar } from './components/layout/Navbar';
import AboutPage from './pages/AboutPage';
import AllCourses from './pages/AllCourses';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CoursePage />} />{/*---> Se cambia por el archivo de inicio */}
          <Route path="/guitar" element={<CoursePage />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Element404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App