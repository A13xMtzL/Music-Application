import React from 'react'
import CourseDescription from '../components/CourseDescription'
import { CourseOverview } from '../components/CourseOverview'
import PreviewCourse from '../components/PreviewCourse'

export default function CoursePage() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between'>
          {/* Elemento a la izquierda */}
          <div className='flex flex-col w-[28%] justify-end ml-[-100px]'>
            <CourseDescription />
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
