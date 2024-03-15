import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Síguenos en redes sociales</h2>
        <div className="flex space-x-4">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-100 transition duration-300">
            <FaFacebook /> {/* Se deben de agregar los links de las redes sociales directamente en 'url' */}
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-100 transition duration-300">
            <FaTwitter />{/* Se deben de agregar los links de las redes sociales directamente en 'url' */}
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-100 transition duration-300">
            <FaInstagram />{/* Se deben de agregar los links de las redes sociales directamente en 'url' */}
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">© 2024 Music Application - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
