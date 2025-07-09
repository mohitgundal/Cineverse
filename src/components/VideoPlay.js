// import React from 'react'
// import { IoClose } from "react-icons/io5";
// import useFetchDetails from '../hooks/useFetchDetails';

// const VideoPlay = ({data, close,media_type}) => {
//   const { data : videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)

//   return (
//     <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
//         <div className='bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>
          
//           <button onClick={close} className=' absolute -right-1 -top-6 text-3xl z-50' aria-label='Close video'>
//               <IoClose/>
//           </button>

//           <iframe
//             src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
//             className='w-full h-full'
//           />



//         </div>
//     </section>
//   )
// }

// export default VideoPlay




// import React, { useEffect, useState } from 'react'
// import { IoClose } from "react-icons/io5";
// import useFetchDetails from '../hooks/useFetchDetails';

// const VideoPlay = ({ data, close, media_type }) => {
//   const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     // Start animation on mount
//     setTimeout(() => setShow(true), 10);
//     // Clean up: animate out before unmount
//     return () => setShow(false);
//   }, []);

//   // Animate out before closing
//   const handleClose = () => {
//     setShow(false);
//     setTimeout(close, 300); // match duration-300
//   };

//   return (
//     <section
//       className={`
//         fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center
//         transition-opacity duration-300
//         ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
//       `}
//     >
//       <div
//         className={`
//           bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative
//           transition-transform duration-300
//           ${show ? 'scale-100' : 'scale-95'}
//         `}
//       >
//         <button
//           onClick={handleClose}
//           className='absolute -right-1 -top-6 text-3xl z-50'
//           aria-label='Close video'
//         >
//           <IoClose />
//         </button>
//         <iframe
//           src={`https://www.youtube.com/embed/${videoData?.results?.[0]?.key}`}
//           className='w-full h-full'
//           allowFullScreen
//         />
//       </div>
//     </section>
//   )
// }

// export default VideoPlay




// import React, { useEffect, useState } from 'react'
// import { IoClose } from "react-icons/io5";
// import useFetchDetails from '../hooks/useFetchDetails';

// const VideoPlay = ({ data, close, media_type }) => {
//   const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShow(true), 10);
//     return () => setShow(false);
//   }, []);

//   const handleClose = () => {
//     setShow(false);
//     setTimeout(close, 300); // match duration-300
//   };

//   return (
//     <section
//       className={`
//         fixed top-0 right-0 bottom-0 left-0 z-40
//         bg-neutral-700/70 dark:bg-neutral-900/80
//         flex justify-center items-center
//         transition-opacity duration-300
//         ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
//       `}
//     >
//       <div
//         className={`
//           bg-black dark:bg-neutral-800
//           w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative
//           transition-transform duration-300
//           ${show ? 'scale-100' : 'scale-95'}
//           shadow-lg dark:shadow-2xl
//         `}
//       >
//         <button
//           onClick={handleClose}
//           className='absolute -right-1 -top-6 text-3xl z-50 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-1 shadow'
//           aria-label='Close video'
//         >
//           <IoClose />
//         </button>
//         <iframe
//           src={`https://www.youtube.com/embed/${videoData?.results?.[0]?.key}`}
//           className='w-full h-full rounded'
//           allowFullScreen
//           title="Video player"
//         />
//       </div>
//     </section>
//   )
// }

// export default VideoPlay




import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(close, 300); // match duration
  };

  return (
    <section
      className={`
        fixed inset-0 z-40
        bg-neutral-900/90
        flex justify-center items-center
        transition-opacity duration-300
        ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        className={`
          bg-neutral-800
          w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative
          transition-transform duration-300
          ${show ? 'scale-100' : 'scale-95'}
          shadow-2xl
        `}
      >
        <button
          onClick={handleClose}
          className="absolute -right-1 -top-6 text-3xl z-50 bg-neutral-900 text-white rounded-full p-1 shadow-lg hover:scale-110 transition"
          aria-label="Close video"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results?.[0]?.key}`}
          className="w-full h-full rounded"
          allowFullScreen
          title="Video player"
        />
      </div>
    </section>
  )
}

export default VideoPlay
