import WhoAmI from "./WhoAmI"

export const CourseOverview = () => {
  return (
    <div className='font-mono'>
      {/* Se tiene una imagen como fondo de todo el course Overwiew   un poco difuminada */}
      <div className='bg-background-image' />
      <div className="relative bg-no-repeat bg-cover bg-center h-96" >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-2xl text-white">APRENDE A TOCAR </p>
            <h1 className="text-7xl font-bold text-orange-500">GUITARRA</h1>
            {/* Se agrega la imagen del instructor */}
            {/* Esta sección debe de estar en la parte izquierda de la imagen */}
            <div className="flex justify-center md:justify-center space-x-4">
              <WhoAmI />
              <div className="flex justify-center">
                <img
                  src="/Portada_Curso.png"
                  width={9500}
                  height={9500}
                  alt="Course Cover"
                  className="absolute z-10" // This makes the image appear behind the text
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}