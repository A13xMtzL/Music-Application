import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function AboutPage() {
  return (
    <div className="mt-16 bg-gray-900 text-white p-10 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-[#6d8294]">Sobre Nosotros</h1>
          <p className="text-lg mb-4">
            <span className="font-bold text-[#6d8294]">Pasión:</span> Somos una empresa profundamente apasionada por la música.
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold text-[#6d8294]">Misión:</span> Nuestra misión es hacer que el aprendizaje de la música sea accesible para todos, porque creemos en el poder de la música para trascender fronteras y unir a las personas.
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold text-[#6d8294]">Únete a nosotros:</span> En este viaje, y hagamos música juntos.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="https://via.placeholder.com/150" alt="Música" className="rounded-full border-white border-4" />
        </div>
      </div>
      <div className="flex justify-center">
        <SocialIcon url="https://facebook.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} /> {/* Se deben de agregar los links de las redes sociales directamente en 'url' */}
        <SocialIcon url="https://twitter.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} />
        <SocialIcon url="https://instagram.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} />
      </div>
    </div>
  );
}
