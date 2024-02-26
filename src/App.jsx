import './App.css'
import { NavBar } from './components/Navbar'
import { CourseOverview } from './components/CourseOverview'
import PreviewCourse from './components/PreviewCourse'

function App() {

  return (
    <>
      <div className='flex'>
        <NavBar />
        {/* <SideMenu/> */}
        <CourseOverview />

        <PreviewCourse/>
      </div>
    </>
  )
}

export default App
