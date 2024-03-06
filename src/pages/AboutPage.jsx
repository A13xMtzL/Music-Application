import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function AboutPage() {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-yellow-300">Sobre Nosotros</h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-yellow-300">Pasión:</span> Somos una empresa profundamente apasionada por la música.
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-yellow-300">Misión:</span> Nuestra misión es hacer que el aprendizaje de la música sea accesible para todos, porque creemos en el poder de la música para trascender fronteras y unir a las personas.
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-yellow-300">Únete a nosotros:</span> En este viaje, y hagamos música juntos.
      </p>
      <div className="flex justify-center">
        <SocialIcon url="https://facebook.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} />
        <SocialIcon url="https://twitter.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} />
        <SocialIcon url="https://instagram.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="transparent" style={{ height: 50, width: 50 }} />
      </div>
    </div>
  );
}
