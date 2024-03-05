import { useState } from 'react';


export default function PreviewCourse() {
  const [isBeginner, setIsBeginner] = useState(false);

  const handleToggle = () => {
    setIsBeginner(!isBeginner);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <button
        onClick={handleToggle}
        className={`px-4 py-2 text-white ${isBeginner ? 'bg-green-500' : 'bg-gray-500'}`}
      >
        {isBeginner ? 'Principiante' : 'Avanzado'}
      </button>
      <div>
        <div className="video-container my-2">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className='rounded-lg'
          ></iframe>
        </div>
        <div className="video-container my-2">
          <iframe
            width="260"
            height="215"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className='rounded-lg'
          ></iframe>
        </div>
      </div>
      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg ">
        ¿Quieres conocer más? <p className='font-sans font-bold text-xl text-white'>REGISTRATE</p>
      </button>
    </div>
  );
}