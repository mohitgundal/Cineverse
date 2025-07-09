// import React from 'react'
// import { useSelector } from 'react-redux'
// import moment from 'moment'
// import { Link } from 'react-router-dom'

// const Card = ({data,trending,index,media_type }) => {
//     const imageURL = useSelector(state => state.movieoData.imageURL)

//     const mediaType = data.media_type ?? media_type
//   return (
//     <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative  transition-transform duration-300 ease-in-out
//     hover:scale-105 hover:shadow-2xl
//     cursor-pointer'>
        
//         {
//             data?.poster_path ? (
//                 <img
//                       src={imageURL + data?.poster_path}
//                       alt={data.title ? `${data.title} poster` : 'Poster image'}
//                 />
//             ) : (
//                 <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
//                     No image found
//                 </div>
//             )

//         }

        

//         <div className='absolute top-4 '>
//             {
//                 trending && (
//                     <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
//                         #{index} Trending
//                     </div>
//                 )
//             }
//         </div>

//         <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2'>
//             <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
//             <div className='text-sm text-neutral-400 flex justify-between items-center'>
//                 <p>{ moment(data.release_date).format("MMMM Do YYYY") }</p>
//                 <p className='bg-black px-1 rounded-full text-xs text-white'>Rating :{Number(data.vote_average).toFixed(1)}</p>
//             </div>
//         </div>
//     </Link>
//   )
// }

// export default Card





// import React from 'react'
// import { useSelector } from 'react-redux'
// import moment from 'moment'
// import { Link } from 'react-router-dom'

// const Card = ({ data, trending, index, media_type }) => {
//   const imageURL = useSelector(state => state.movieoData.imageURL)
//   const mediaType = data.media_type ?? media_type

//   return (
//     <Link
//       to={"/" + mediaType + "/" + data.id}
//       className="
//         w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative
//         transition-transform duration-300 ease-in-out
//         hover:scale-105 hover:shadow-2xl
//         cursor-pointer
//         bg-white dark:bg-neutral-800
//         text-black dark:text-white
//         shadow
//         transition-colors duration-300
//       "
//     >
//       {data?.poster_path ? (
//         <img
//           src={imageURL + data?.poster_path}
//           alt={data.title ? `${data.title} poster` : 'Poster image'}
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <div className="bg-neutral-200 dark:bg-neutral-700 h-full w-full flex justify-center items-center">
//           No image found
//         </div>
//       )}

//       <div className="absolute top-4">
//         {trending && (
//           <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 dark:bg-neutral-700/70 overflow-hidden">
//             #{index} Trending
//           </div>
//         )}
//       </div>

//       <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 dark:bg-neutral-900/70 p-2">
//         <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
//           {data?.title || data?.name}
//         </h2>
//         <div className="text-sm text-neutral-600 dark:text-neutral-300 flex justify-between items-center">
//           <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
//           <p className="bg-black dark:bg-neutral-700 px-1 rounded-full text-xs text-white">
//             Rating :{Number(data.vote_average).toFixed(1)}
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Card




// import React from 'react'
// import { useSelector } from 'react-redux'
// import moment from 'moment'
// import { Link } from 'react-router-dom'

// const Card = ({ data, trending, index, media_type }) => {
//   const imageURL = useSelector(state => state.movieoData.imageURL)
//   const mediaType = data.media_type ?? media_type

//   return (
//     <Link
//       to={`/${mediaType}/${data.id}`}
//       className="
//         w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative
//         transition-transform duration-300 ease-in-out
//         hover:scale-105 hover:shadow-2xl
//         cursor-pointer
//         bg-neutral-800 text-white shadow
//         transition-colors duration-300
//       "
//     >
//       {data?.poster_path ? (
//         <img
//           src={imageURL + data?.poster_path}
//           alt={data.title ? `${data.title} poster` : 'Poster image'}
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <div className="bg-neutral-700 h-full w-full flex justify-center items-center text-sm text-gray-300 px-2 text-center">
//           No image found
//         </div>
//       )}

//       {/* Trending badge */}
//       {trending && (
//         <div className="absolute top-4 py-1 px-4 backdrop-blur-3xl rounded-r-full bg-neutral-700/70 text-sm">
//           #{index} Trending
//         </div>
//       )}

//       {/* Bottom Info */}
//       <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-neutral-900/70 p-2">
//         <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
//           {data?.title || data?.name}
//         </h2>
//         <div className="text-sm text-neutral-300 flex justify-between items-center">
//           <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
//           <p className="bg-neutral-700 px-2 py-[2px] rounded-full text-xs text-white">
//             Rating: {Number(data.vote_average).toFixed(1)}
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Card



// import React from 'react'
// import { useSelector } from 'react-redux'
// import moment from 'moment'
// import { Link } from 'react-router-dom'

// const Card = ({ data, trending, index, media_type }) => {
//   const imageURL = useSelector((state) => state.movieoData.imageURL)
//   const mediaType = data.media_type ?? media_type

//   const title = data?.title || data?.name || "Untitled"
//   const releaseDate = data?.release_date || data?.first_air_date || null
//   const rating = data?.vote_average ? Number(data?.vote_average).toFixed(1) : "N/A"

//   return (
//     <Link
//       to={`/${mediaType}/${data.id}`}
//       className="
//         bg-neutral-800 text-white rounded-md shadow-md overflow-hidden
//         transition-transform duration-300 hover:scale-105
//         flex flex-col h-[330px] max-w-[230px] min-w-[230px]
//       "
//     >
//       {/* Image or fallback */}
//       <div className="w-full h-[300px] relative">
//         {data?.poster_path ? (
//           <img
//             src={imageURL + data?.poster_path}
//             alt={`${title} poster`}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="h-full w-full flex items-center justify-center bg-neutral-700 text-gray-300 text-sm text-center px-2">
//             No image found
//           </div>
//         )}

//         {/* Trending badge */}
//         {trending && (
//           <div className="absolute top-2 left-0 bg-black/70 text-white px-3 py-1 text-xs rounded-r-full shadow">
//             #{index} Trending
//           </div>
//         )}
//       </div>

//       {/* Bottom Info */}
//       <div className="bg-neutral-900 px-2 py-2 h-[70px] flex flex-col justify-between">
//         <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>
//         <div className="flex justify-between items-center text-xs text-neutral-400">
//           <span>
//             {releaseDate
//               ? moment(releaseDate).format("MMM D, YYYY")
//               : "Date N/A"}
//           </span>
//           <span className="bg-neutral-700 text-white px-2 py-0.5 rounded-full">
//             ⭐ {rating}
//           </span>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Card



// import React from 'react';
// import { useSelector } from 'react-redux';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

// const Card = ({ data, trending, index, media_type }) => {
//   const imageURL = useSelector(state => state.movieoData.imageURL);
//   const mediaType = data.media_type ?? media_type;

//   const title = data?.title || data?.name || "Untitled";
//   const releaseDate = data?.release_date || data?.first_air_date || null;
//   const rating = data?.vote_average ? Number(data?.vote_average).toFixed(1) : "N/A";

//   return (
//     <Link
//       to={`/${mediaType}/${data.id}`}
//       className="bg-neutral-800 text-white rounded-md shadow-md overflow-hidden
//                  transition-transform duration-300 hover:scale-105
//                  flex flex-col w-full sm:w-[230px] h-[330px]"
//     >
//       {/* Image section */}
//       <div className="w-full h-[300px] relative">
//         {data?.poster_path ? (
//           <img
//             src={imageURL + data?.poster_path}
//             alt={`${title} poster`}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="h-full w-full flex items-center justify-center bg-neutral-700 text-gray-300 text-sm text-center px-2">
//             No image found
//           </div>
//         )}

//         {/* Trending badge */}
//         {trending && (
//           <div className="absolute top-2 left-0 bg-black/70 text-white px-3 py-1 text-xs rounded-r-full shadow">
//             #{index} Trending
//           </div>
//         )}
//       </div>

//       {/* Info section */}
//       <div className="bg-neutral-900 px-2 py-2 h-[70px] flex flex-col justify-between">
//         <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>
//         <div className="flex justify-between items-center text-xs text-neutral-400">
//           <span>
//             {releaseDate ? moment(releaseDate).format("MMM D, YYYY") : "Date N/A"}
//           </span>
//           <span className="bg-neutral-700 text-white px-2 py-0.5 rounded-full">
//             ⭐ {rating}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;



import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector(state => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type;

  const title = data?.title || data?.name || "Untitled";
  const releaseDate = data?.release_date || data?.first_air_date || null;
  const rating = data?.vote_average ? Number(data?.vote_average).toFixed(1) : "N/A";

  return (
    <Link
      to={`/${mediaType}/${data.id}`}
      className="bg-neutral-800 text-white rounded-md shadow-md overflow-hidden
                 transition-transform duration-300 hover:scale-105
                 flex flex-col w-full sm:w-[230px] h-[360px]"
    >
      {/* Image section */}
      <div className="w-full h-[270px] relative">
        {data?.poster_path ? (
          <img
            src={imageURL + data?.poster_path}
            alt={`${title} poster`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-neutral-700 text-gray-300 text-sm text-center px-2">
            No image found
          </div>
        )}

        {/* Trending badge */}
        {trending && (
          <div className="absolute top-2 left-0 bg-black/70 text-white px-3 py-1 text-xs rounded-r-full shadow">
            #{index} Trending
          </div>
        )}
      </div>

      {/* Info section */}
      <div className="bg-neutral-900 px-2 py-2 h-[90px] flex flex-col justify-between">
        <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>
        <div className="flex justify-between items-center text-xs text-neutral-400">
          <span>
            {releaseDate ? moment(releaseDate).format("MMM D, YYYY") : "Date N/A"}
          </span>
          <span className="bg-neutral-700 text-white px-2 py-0.5 rounded-full">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
