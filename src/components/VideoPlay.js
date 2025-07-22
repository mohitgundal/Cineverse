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
