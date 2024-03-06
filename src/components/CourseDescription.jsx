export default function CourseDescription() {
  return (
    <div className=" text-white rounded-lg shadow-sm p-6">
    {/* <div className="bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#3e5c76] text-white rounded-lg shadow-sm p-6"> */}
      <h1 className=" flex items-start ml-4 text-3xl font-bold text-orange-600 mb-3">¿Quién soy?</h1>
      <div className="overflow-y-auto h-64  no-scrollbar transition-colors duration-200 hover:rounded-lg hover:text-white hover:bg-[#0d1321]">
        <p className="text-base leading-relaxed tracking-wide text-start">
          Soy un apasionado profesor de guitarra con años de experiencia. Te enseñaré en este curso desde la postura correcta hasta los diferentes tipos de rasgueo, a través de un método de enseñanza dinámico y ameno para que disfrutes aprendiendo. Dominarás una amplia variedad de acordes y aprenderás a combinarlos de forma creativa. Te introducirás en la lectura de partituras y tablaturas. Llegaremos incluso a desarrollarás tu creatividad y aprenderás a expresarte a través de la música mediante la improvisación. No esperes más para explorar el maravilloso mundo de la guitarra conmigo y dar el primer paso hacia convertirte en un guitarrista increíble.
        </p>
      </div>
    </div>
  );
}