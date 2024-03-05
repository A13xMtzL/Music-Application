import './App.css'
import { CourseOverview } from './components/CourseOverview'
import { NavBar } from './components/Navbar'
import PreviewCourse from './components/PreviewCourse'
import WhoAmI from './components/WhoAmI'

function App() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <NavBar />
        <div className='flex justify-between '>
          {/* Elemento a la izquierda */}
          <div className='flex flex-col w-1/5  justify-end'>
            <WhoAmI />
          </div>
          {/* Elemento del centro, quiero que este abarque todo el archivo */}
          <div className='flex-grow w-1/2'>
            <CourseOverview />
          </div>
          {/* Elemento de la derecha */}
          <div className=''>
            <PreviewCourse />
          </div>
        </div>
      </div>
    </>
  )
}

export default App