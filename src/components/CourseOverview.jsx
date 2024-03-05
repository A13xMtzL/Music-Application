import WhoAmI from "./WhoAmI"

export const CourseOverview = () => {
  return (
    <div className='font-mono h-full'>
      <div className="relative bg-no-repeat bg-cover bg-center" >
        <div className="flex items-center justify-center ">
          <div className="text-center pt-20">
            <p className="text-2xl text-white">APRENDE A TOCAR </p>
            <h1 className="text-7xl font-bold text-orange-500">GUITARRA</h1>
            {/* Se agrega la imagen del instructor */}
            <div className="flex justify-center md:justify-center space-x-4">
              <img
                className="absolute z-0 object-cover w-full" // This makes the image appear behind the text
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