import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-opacity-50 py-20 px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-200 mb-6">¡Descubre el mundo de la música!</h1>
        <p className="text-lg text-gray-200 mb-10">Aprende a tocar instrumentos musicales de manera divertida y efectiva con nuestros cursos en línea.</p>
        <div className="flex justify-center mb-10">
          <img src="https://media.istockphoto.com/id/894058154/es/foto/instrumentos-musical.jpg?b=1&s=612x612&w=0&k=20&c=ve8PhYB5vpyKcBfhOPmeIfb-OqAnrzEuY9FvblJtrWo=" alt="Instruments" className="rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center">
            <img src="https://estepais.com/wp-content/uploads/2019/11/imagenes-estepais-musica.jpg" alt="Teachers" className="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-200 mb-3">Aprende con instructores expertos</h2>
            <p className="text-lg text-gray-200 mb-6">Nuestros cursos están diseñados y impartidos por instructores profesionales y apasionados por la música. Obtén consejos, trucos y técnicas de expertos en el campo.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-200 mb-3">Flexibilidad de aprendizaje</h2>
            <p className="text-lg text-gray-200 mb-6">Aprende a tu propio ritmo y desde cualquier lugar. Accede a los cursos en línea desde tu computadora o dispositivo móvil en cualquier momento que te convenga.</p>
          </div>
          <div className="flex items-center">
            <img src="https://day.io/wp-content/uploads/2021/09/time-5961665_1280-e1631279917270-740x490.png" alt="Flexibility" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        <div className="mt-10">
          <Link to="/courses"
            className="bg-yellow-400 text-purple-800 py-3 px-8 rounded-full text-lg font-bold hover:bg-yellow-500 transition ease-in-out duration-300 hover:scale-120 hover:scale-x-105 active:scale-x-100">
            Explora nuestros cursos
          </Link>
        </div>
      </div>
    </div>
  );
}
