import { VscTriangleDown } from 'react-icons/vsc';

export default function PreviewCourse() {
  const videoId = '1g0DoZH6mXTX-Dim3i1bp9FZc9ASgd4T3'; // Reemplaza esto con tu ID de video de Google Drive



  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <button className="flex px-4 py-2 text-xl bg-transparent rounded-lg text-orange-500 font-extrabold">
        PRINCIPIANTE
        <VscTriangleDown className='m-1 flex items-center justify-center'/>

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
            src={`https://drive.google.com/file/d/${videoId}/preview`}
            title="Google Drive video player"
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