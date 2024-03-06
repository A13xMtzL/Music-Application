export const CourseOverview = () => {
  return (
    <div className='font-sans h-full'>
      <div className="relative bg-no-repeat bg-cover bg-center" >
        <div className="flex items-center justify-center ">
          <div className="text-center pt-20">
            <p className="text-4xl text-white">APRENDE A TOCAR </p>
            <h1 className="text-8xl font-bold text-orange-500">GUITARRA</h1>
            {/* Se agrega la imagen del instructor */}
            <div className="flex justify-center md:justify-center space-x-4 relative h-96 w-full">
              <img
                className="absolute z-0 object-cover transform scale-150 w-full h-full" // This makes the image appear behind the text and scales it up
                src="/Portada_Curso.png"
                alt="Instructor del curso"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}