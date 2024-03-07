import React from 'react';

export default function FAQPage() {
  return (
    <div className="py-20 px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-200 mb-10 text-center">Preguntas Frecuentes</h1>
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg mb-6">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo puedo inscribirme en un curso?</h2>
              <p className="text-lg text-gray-700">Para inscribirte en uno de nuestros cursos, simplemente visita nuestra página de cursos, selecciona el curso que te interesa y haz clic en el botón <strong>"Inscribirse"</strong>. También ofrecemos una opción de suscripción mensual que te permite acceder a todos nuestros cursos. Luego sigue las instrucciones para completar el proceso de inscripción o suscripción.</p>            </div>
            <img src="https://ciudademprende.com/wp-content/uploads/2020/03/cursos-online-portada.jpg" alt="Register" className="w-full md:w-1/2 h-auto rounded-lg object-cover" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg">
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s0918c0f8be47f8f1/image/i83e3445922b3de6c/version/1544315089/image.png"
              alt="Payment"
              className="w-full md:w-1/2 h-auto rounded-lg object-cover" />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué métodos de pago aceptan?</h2>
              <p className="text-lg text-gray-700">Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito, tarjetas de débito y PayPal. Puedes seleccionar tu método de pago preferido durante el proceso de inscripción.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#contact" className="bg-yellow-400 text-purple-800 py-3 px-8 rounded-full text-lg font-bold hover:bg-yellow-500 transition duration-300">¿Tienes más preguntas? Contáctanos</a>
        </div>
      </div>
    </div>
  );
}
