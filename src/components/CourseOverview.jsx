import { motion } from 'framer-motion';

export const CourseOverview = ({course}) => {
  return (
    <div className='font-sans h-full relative'>
      <div className="flex items-center justify-center">
        <div className="text-center pt-20 relative z-10">
          <p className="text-4xl text-white">APRENDE A TOCAR </p>
          <h1 className="text-8xl font-bold text-orange-500">{course.title}</h1>
        </div>
        {/* Contenedor para las imágenes */}
        <div className="absolute inset-0 flex justify-center mt-10 space-x-1">
          {/* Primera imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="z-0 object-cover h-96 md:h-full scale-100 "
              src="/Acoustic-Guitar.png"
              alt="Imagen de guitarra acústica"
            />
          </motion.div>
          {/* Segunda imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img
              className="z-0 object-cover h-96 md:h-full scale-110  mt-10"
              src="/Guitar.png"
              alt="Imagen de guitarra acústica"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
