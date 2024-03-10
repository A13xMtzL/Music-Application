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

  const guitarCourse = {
    title: 'Guitarra',
    description: 'En este curso de guitarra, aprenderás desde los fundamentos básicos hasta técnicas avanzadas para mejorar tu habilidad en el instrumento. Exploraremos una variedad de acordes, patrones de rasgueo y técnicas de improvisación para ayudarte a expresarte musicalmente de manera creativa. Con lecciones dinámicas y divertidas, te guiaremos en tu viaje para convertirte en un guitarrista versátil y seguro.',
    videoId : '1g0DoZH6mXTX-Dim3i1bp9FZc9ASgd4T3' // Reemplaza esto con tu ID de video de Google Drive

  }

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />{/*---> Se cambia por el archivo de inicio */}
          <Route path="/guitar" element={<CoursePage course={guitarCourse} />} />
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