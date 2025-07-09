// // import React, { useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import useFetch from '../hooks/useFetch'
// // import useFetchDetails from '../hooks/useFetchDetails'
// // import { useSelector } from 'react-redux'
// // import moment from 'moment'
// // import Divider from '../components/Divider'
// // import HorizontalScollCard from '../components/HorizontalScollCard'
// // import VideoPlay from '../components/VideoPlay'

// // const DetailsPage = () => {
// //   const params = useParams()
// //   const imageURL = useSelector(state => state.movieoData.imageURL)
// //   const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
// //   const { data :castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
// //   const { data : similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
// //   const { data : recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
// //   const [playVideo,setPlayVideo] = useState(false)
// //   const [playVideoId,setPlayVideoId] = useState("")

// //   console.log("data",data)
// //   console.log("star cast",castData)

// //   const handlePlayVideo = (data)=>{
// //     setPlayVideoId(data)
// //     setPlayVideo(true)

// //   }

// //   const duration = (data?.runtime/60)?.toFixed(1)?.split(".")
// //   const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")

// //   return (
// //     <div>

// //           <div className='w-full h-[280px] relative hidden lg:block'>
// //               <div className='w-full h-full'>
// //                 <img
// //             src={imageURL + data?.backdrop_path}
// //             alt={data.title ? `${data.title} banner` : 'Banner image'}
// //                     className='h-full w-full object-cover'
// //                 />
// //               </div>
// //               <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
// //           </div>

// //           <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 '>
// //               <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
// //                   <img
// //             src={imageURL + data?.poster_path}
// //             alt={data.title ? `${data.title} poster` : 'Poster image'}
// //                       className='h-80 w-60 object-cover rounded'
// //                   />
// //                   <button onClick={()=>handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'>Play Now</button>
// //               </div>

// //               <div>
// //                 <h2 className='text-2xl lg:text-4xl font-bold text-white '>{data?.title || data?.name}</h2>
// //                 <p className='text-neutral-400'>{data?.tagline}</p>

// //                 <Divider/>

// //                 <div className='flex items-center gap-3'>
// //                     <p>
// //                       Rating :  {Number(data?.vote_average).toFixed(1)}+
// //                     </p>
// //                     <span>|</span>
// //                     <p>
// //                       View : { Number(data?.vote_count)}
// //                     </p>
// //                     <span>|</span>
// //                     <p>Duration : {duration[0]}h {duration[1]}m</p>
// //                 </div>

// //                 <Divider/>

// //                 <div>
// //                     <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
// //                     <p>{data?.overview}</p>

// //                     <Divider/>
// //                     <div className='flex items-center gap-3 my-3 text-center'>
// //                         <p>
// //                           Staus : {data?.status}
// //                         </p>
// //                         <span>|</span>
// //                         <p>
// //                           Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}
// //                         </p>
// //                         <span>|</span>
// //                         <p>
// //                           Revenue : {Number(data?.revenue)}
// //                         </p>
// //                     </div>

// //                     <Divider/>
// //                 </div>

// //                 <div>
// //                     <p><span className='text-white'>Director</span> : {castData?.crew[0]?.name}</p>

// //                     <Divider/>

// //                     <p>
// //                       <span className='text-white'>Writer : {writer}</span>
// //                     </p>
// //                 </div>

// //                 <Divider/>

// //                 <h2 className='font-bold text-lg'>Cast :</h2>
// //                 {/* <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
// //                     {
// //                       castData?.cast?.filter(el => el?.profile_path).map((starCast,index)=>{
// //                         return(
// //                           <div>
// //                             <div>
// //                               <img
// //                                 src={imageURL+starCast?.profile_path}
// //                                 className='w-24 h-24 object-cover rounded-full'
// //                               />
// //                             </div>
// //                             <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
// //                           </div>
// //                         )
// //                       })
// //                     }
// //                 </div> */}

// // <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
// //   {
// //     castData?.cast?.filter(el => el?.profile_path).map((starCast) => {
// //       return (
// //         <div key={starCast.cast_id}>
// //           <div>
// //             <img
// //               src={imageURL + starCast?.profile_path}
// //               alt={starCast.name}
// //               className='w-24 h-24 object-cover rounded-full'
// //             />
// //           </div>
// //           <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
// //         </div>
// //       )
// //     })
// //   }
// // </div>

// //               </div>
// //           </div>

// //           <div>
// //               <HorizontalScollCard data={similarData} heading={"Similar "+params?.explore} media_type={params?.explore}/>
// //               <HorizontalScollCard data={recommendationData} heading={"Recommendation "+params?.explore} media_type={params?.explore}/>
// //           </div>

// //           {
// //             playVideo && (
// //               <VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={params?.explore}/>
// //             )
// //           }

// //     </div>
// //   )
// // }

// // export default DetailsPage

// // import React, { useState } from "react";
// // import { useParams } from "react-router-dom";
// // import useFetch from "../hooks/useFetch";
// // import useFetchDetails from "../hooks/useFetchDetails";
// // import { useSelector } from "react-redux";
// // import moment from "moment";
// // import Divider from "../components/Divider";
// // import HorizontalScollCard from "../components/HorizontalScollCard";
// // import VideoPlay from "../components/VideoPlay";

// // const DetailsPage = () => {
// //   const params = useParams();
// //   const imageURL = useSelector((state) => state.movieoData.imageURL);
// //   const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
// //   const { data: castData } = useFetchDetails(
// //     `/${params?.explore}/${params?.id}/credits`
// //   );
// //   const { data: similarData } = useFetch(
// //     `/${params?.explore}/${params?.id}/similar`
// //   );
// //   const { data: recommendationData } = useFetch(
// //     `/${params?.explore}/${params?.id}/recommendations`
// //   );
// //   const [playVideo, setPlayVideo] = useState(false);
// //   const [playVideoId, setPlayVideoId] = useState("");

// //   if (!data || !castData) {
// //     return (
// //       <main className="flex items-center justify-center min-h-[50vh]">
// //         <div className="text-lg text-neutral-400">Loading...</div>
// //       </main>
// //     );
// //   }

// //   const handlePlayVideo = (data) => {
// //     setPlayVideoId(data);
// //     setPlayVideo(true);
// //   };

// //   const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
// //   const writer = castData?.crew
// //     ?.filter((el) => el?.job === "Writer")
// //     ?.map((el) => el?.name)
// //     ?.join(", ");

// //   return (
// //     <main>
// //       <div className="w-full h-[280px] relative hidden lg:block">
// //         <div className="w-full h-full">
// //           <img
// //             src={imageURL + data?.backdrop_path}
// //             alt={data.title ? `${data.title} banner` : "Banner image"}
// //             className="h-full w-full object-cover"
// //           />
// //         </div>
// //         <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
// //       </div>

// //       <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
// //         <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
// //           <img
// //             src={imageURL + data?.poster_path}
// //             alt={data.title ? `${data.title} poster` : "Poster image"}
// //             className="h-80 w-60 object-cover rounded"
// //           />
// //           {/* <button onClick={() => handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'>Play Now</button> */}

// //           <button
// //             onClick={() => handlePlayVideo(data)}
// //             className="
// //     mt-3 w-full py-2 px-4 text-center
// //     bg-white text-black
// //     dark:bg-neutral-800 dark:text-white
// //     rounded font-bold text-lg
// //     hover:bg-gradient-to-l from-red-500 to-orange-500 dark:hover:from-orange-600 dark:hover:to-yellow-400
// //     hover:scale-105
// //     transition-all duration-300
// //     shadow
// //   "
// //           >
// //             Play Now
// //           </button>
// //         </div>

// //         <div>
// //           <h2 className="text-2xl lg:text-4xl font-bold text-white ">
// //             {data?.title || data?.name}
// //           </h2>
// //           <p className="text-neutral-400">{data?.tagline}</p>

// //           <Divider />

// //           <div className="flex items-center gap-3">
// //             <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
// //             <span>|</span>
// //             <p>View : {Number(data?.vote_count)}</p>
// //             <span>|</span>
// //             <p>
// //               Duration : {duration[0]}h {duration[1]}m
// //             </p>
// //           </div>

// //           <Divider />

// //           <div>
// //             <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
// //             <p>{data?.overview}</p>

// //             <Divider />
// //             <div className="flex items-center gap-3 my-3 text-center">
// //               <p>Staus : {data?.status}</p>
// //               <span>|</span>
// //               <p>
// //                 Release Date :{" "}
// //                 {moment(data?.release_date).format("MMMM Do YYYY")}
// //               </p>
// //               <span>|</span>
// //               <p>Revenue : {Number(data?.revenue)}</p>
// //             </div>

// //             <Divider />
// //           </div>

// //           <div>
// //             <p>
// //               <span className="text-white">Director</span> :{" "}
// //               {castData?.crew[0]?.name}
// //             </p>

// //             <Divider />

// //             <p>
// //               <span className="text-white">Writer : {writer}</span>
// //             </p>
// //           </div>

// //           <Divider />

// //           <h2 className="font-bold text-lg">Cast :</h2>
// //           <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
// //             {castData?.cast
// //               ?.filter((el) => el?.profile_path)
// //               .map((starCast) => {
// //                 return (
// //                   <div key={starCast.cast_id}>
// //                     <div>
// //                       <img
// //                         src={imageURL + starCast?.profile_path}
// //                         alt={starCast.name}
// //                         className="w-24 h-24 object-cover rounded-full"
// //                       />
// //                     </div>
// //                     <p className="font-bold text-center text-sm text-neutral-400">
// //                       {starCast?.name}
// //                     </p>
// //                   </div>
// //                 );
// //               })}
// //           </div>
// //         </div>
// //       </div>

// //       <div>
// //         <HorizontalScollCard
// //           data={similarData}
// //           heading={"Similar " + params?.explore}
// //           media_type={params?.explore}
// //         />
// //         <HorizontalScollCard
// //           data={recommendationData}
// //           heading={"Recommendation " + params?.explore}
// //           media_type={params?.explore}
// //         />
// //       </div>

// //       {playVideo && (
// //         <VideoPlay
// //           data={playVideoId}
// //           close={() => setPlayVideo(false)}
// //           media_type={params?.explore}
// //         />
// //       )}
// //     </main>
// //   );
// // };

// // export default DetailsPage;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import useFetchDetails from "../hooks/useFetchDetails";
// import { useSelector } from "react-redux";
// import moment from "moment";
// import Divider from "../components/Divider";
// import HorizontalScollCard from "../components/HorizontalScollCard";
// import VideoPlay from "../components/VideoPlay";

// const DetailsPage = () => {
//   const params = useParams();
//   const imageURL = useSelector((state) => state.movieoData.imageURL);

//   const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
//   const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);
//   const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`);
//   const { data: recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`);

//   const [playVideo, setPlayVideo] = useState(false);
//   const [playVideoId, setPlayVideoId] = useState("");

//   if (!data || !castData) {
//     return (
//       <main className="flex items-center justify-center min-h-[50vh]">
//         <div className="text-lg text-neutral-400">Loading...</div>
//       </main>
//     );
//   }

//   const handlePlayVideo = (data) => {
//     setPlayVideoId(data);
//     setPlayVideo(true);
//   };

//   const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
//   const writer = castData?.crew
//     ?.filter((el) => el?.job === "Writer")
//     ?.map((el) => el?.name)
//     ?.join(", ");

//   return (
//     <main>
//       {/* Banner Image */}
//       <div className="w-full h-[280px] relative hidden lg:block">
//         <div className="w-full h-full">
//           <img
//             src={imageURL + data?.backdrop_path}
//             alt={data.title ? `${data.title} banner` : "Banner image"}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
//       </div>

//       <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
//         {/* Poster & Play Button */}
//         <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
//           <img
//             src={imageURL + data?.poster_path}
//             alt={data.title ? `${data.title} poster` : "Poster image"}
//             className="h-80 w-60 object-cover rounded shadow-lg"
//           />
//           <button
//             onClick={() => handlePlayVideo(data)}
//             className="
//               mt-3 w-full py-2 px-4 text-center
//               bg-gradient-to-l from-red-600 to-orange-500
//               text-white font-bold text-lg
//               rounded hover:scale-105 transition-all duration-300
//               shadow-md
//             "
//             aria-label="Play trailer"
//           >
//             Play Now
//           </button>
//         </div>

//         {/* Movie Details */}
//         <div>
//           <h2 className="text-2xl lg:text-4xl font-bold text-white mb-1" aria-label="Movie title">
//             {data?.title || data?.name}
//           </h2>
//           <p className="text-neutral-400 italic">{data?.tagline}</p>

//           <Divider />

//           <div className="flex items-center gap-3 text-neutral-300">
//             <p>Rating: {Number(data?.vote_average).toFixed(1)}+</p>
//             <span>|</span>
//             <p>Votes: {Number(data?.vote_count).toLocaleString()}</p>
//             <span>|</span>
//             <p>
//               Duration: {duration[0]}h {duration[1]}m
//             </p>
//           </div>

//           <Divider />

//           <div>
//             <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
//             <p className="text-neutral-300">{data?.overview}</p>

//             <Divider />

//             <div className="flex items-center gap-3 my-3 text-neutral-300 text-sm">
//               <p>Status: {data?.status}</p>
//               <span>|</span>
//               <p>Release: {moment(data?.release_date).format("MMMM Do YYYY")}</p>
//               <span>|</span>
//               <p>Revenue: ${Number(data?.revenue).toLocaleString()}</p>
//             </div>

//             <Divider />

//             <p className="text-neutral-300">
//               <span className="text-white font-medium">Director:</span> {castData?.crew[0]?.name}
//             </p>

//             <Divider />

//             <p className="text-neutral-300">
//               <span className="text-white font-medium">Writer:</span> {writer || "N/A"}
//             </p>

//             <Divider />
//           </div>

//           {/* Cast */}
//           <h2 className="font-bold text-lg text-white mt-4">Cast:</h2>
//           <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
//             {castData?.cast
//               ?.filter((el) => el?.profile_path)
//               .map((starCast) => (
//                 <div key={starCast.cast_id}>
//                   <div>
//                     <img
//                       src={imageURL + starCast?.profile_path}
//                       alt={starCast.name}
//                       className="w-24 h-24 object-cover rounded-full"
//                     />
//                   </div>
//                   <p className="font-bold text-center text-sm text-neutral-400">
//                     {starCast?.name}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Scroll Cards */}
//       <div>
//         <HorizontalScollCard
//           data={similarData}
//           heading={"Similar " + params?.explore}
//           media_type={params?.explore}
//         />
//         <HorizontalScollCard
//           data={recommendationData}
//           heading={"Recommendation " + params?.explore}
//           media_type={params?.explore}
//         />
//       </div>

//       {/* Video Player Modal */}
//       {playVideo && (
//         <VideoPlay
//           data={playVideoId}
//           close={() => setPlayVideo(false)}
//           media_type={params?.explore}
//         />
//       )}
//     </main>
//   );
// };

// export default DetailsPage;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import useFetchDetails from "../hooks/useFetchDetails";
// import { useSelector } from "react-redux";
// import moment from "moment";
// import Divider from "../components/Divider";
// import HorizontalScollCard from "../components/HorizontalScollCard";
// import VideoPlay from "../components/VideoPlay";

// const DetailsPage = () => {
//   const params = useParams();
//   const imageURL = useSelector((state) => state.movieoData.imageURL);

//   const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
//   const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);
//   const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`);
//   const { data: recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`);

//   const [playVideo, setPlayVideo] = useState(false);
//   const [playVideoId, setPlayVideoId] = useState("");

//   if (!data || !castData) {
//     return (
//       <main className="flex items-center justify-center min-h-[50vh] bg-neutral-900 text-white">
//         <div className="text-lg text-neutral-400">Loading...</div>
//       </main>
//     );
//   }

//   const handlePlayVideo = (data) => {
//     setPlayVideoId(data);
//     setPlayVideo(true);
//   };

//   const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
//   const writer = castData?.crew
//     ?.filter((el) => el?.job === "Writer")
//     ?.map((el) => el?.name)
//     ?.join(", ");

//   return (
//     <main className="bg-neutral-900 text-white transition-colors duration-300">
//       {/* Banner */}
//       <div className="w-full h-[280px] relative hidden lg:block">
//         <img
//           src={imageURL + data?.backdrop_path}
//           alt={`${data?.title || data?.name} banner`}
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
//       </div>

//       <section className="container mx-auto px-4 py-16 lg:py-0 flex flex-col lg:flex-row gap-6 lg:gap-10">
//         {/* Poster + Button */}
//         <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
//           <img
//             src={imageURL + data?.poster_path}
//             alt={`${data?.title || data?.name} poster`}
//             className="h-80 w-60 object-cover rounded-lg shadow-lg"
//           />
//           <button
//             onClick={() => handlePlayVideo(data)}
//             className="mt-4 w-full py-2 px-4 text-center bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold text-lg rounded hover:brightness-110 transition-all duration-300 shadow-md"
//             aria-label="Play trailer"
//           >
//             Play Now
//           </button>
//         </div>

//         {/* Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl lg:text-4xl font-bold text-white mb-1">
//             {data?.title || data?.name}
//           </h1>
//           <p className="text-neutral-400 italic">{data?.tagline}</p>

//           <Divider />

//           <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
//             <p>⭐ {Number(data?.vote_average).toFixed(1)} / 10</p>
//             <span>|</span>
//             <p>👥 {Number(data?.vote_count).toLocaleString()} votes</p>
//             <span>|</span>
//             <p>⏱️ {duration[0]}h {duration[1]}m</p>
//           </div>

//           <Divider />

//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-white">Overview</h3>
//             <p className="text-neutral-300 leading-relaxed">{data?.overview}</p>
//           </div>

//           <Divider />

//           <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
//             <p>Status: {data?.status}</p>
//             <span>|</span>
//             <p>Release: {moment(data?.release_date).format("MMMM Do YYYY")}</p>
//             <span>|</span>
//             <p>Revenue: ${Number(data?.revenue).toLocaleString()}</p>
//           </div>

//           <Divider />

//           <div className="space-y-2 text-neutral-300 text-sm">
//             <p><span className="text-white font-medium">Director:</span> {castData?.crew[0]?.name}</p>
//             <p><span className="text-white font-medium">Writer:</span> {writer || "N/A"}</p>
//           </div>

//           <Divider />

//           {/* Cast */}
//           <div>
//             <h2 className="font-bold text-lg text-white mb-3">Cast</h2>
//             <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
//               {castData?.cast?.filter(el => el?.profile_path).map((starCast) => (
//                 <div key={starCast.cast_id} className="text-center">
//                   <img
//                     src={imageURL + starCast?.profile_path}
//                     alt={starCast.name}
//                     className="w-24 h-24 object-cover rounded-full border border-neutral-700"
//                   />
//                   <p className="mt-1 text-sm text-neutral-300 font-semibold">{starCast?.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Similar & Recommendations */}
//       <section>
//         <HorizontalScollCard
//           data={similarData}
//           heading={`Similar ${params?.explore}`}
//           media_type={params?.explore}
//         />
//         <HorizontalScollCard
//           data={recommendationData}
//           heading={`Recommendation ${params?.explore}`}
//           media_type={params?.explore}
//         />
//       </section>

//       {/* Video Overlay */}
//       {playVideo && (
//         <VideoPlay
//           data={playVideoId}
//           close={() => setPlayVideo(false)}
//           media_type={params?.explore}
//         />
//       )}
//     </main>
//   );
// };

// export default DetailsPage;

// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScollCard from "../components/HorizontalScollCard";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  if (!data || !castData) {
    return (
      <main className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-neutral-400">Loading...</div>
      </main>
    );
  }

  const handlePlayVideo = (data) => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  const durationMins = data?.runtime;
  const duration =
    durationMins && !isNaN(durationMins)
      ? `${Math.floor(durationMins / 60)}h ${durationMins % 60}m`
      : "N/A";

  const writer =
    castData?.crew
      ?.filter((el) => el?.job === "Writer")
      ?.map((el) => el?.name)
      ?.join(", ") || "N/A";

  const director =
    castData?.crew?.find((el) => el?.job === "Director")?.name || "N/A";
  const revenue =
    data?.revenue && !isNaN(data.revenue)
      ? `$${Number(data.revenue).toLocaleString()}`
      : "N/A";

  return (
    <main className="bg-neutral-900 text-white">
      {/* Banner */}
      <div className="w-full h-[280px] relative hidden lg:block">
        <img
          src={imageURL + data?.backdrop_path}
          alt={data.title ? `${data.title} banner` : "Banner image"}
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Poster + Play Button */}
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            alt={data.title ? `${data.title} poster` : "Poster image"}
            className="h-80 w-60 object-cover rounded shadow-lg"
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-gradient-to-l from-red-600 to-orange-500 text-white font-bold text-lg rounded hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Play trailer"
          >
            Play Now
          </button>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold">
            {data?.title || data?.name}
          </h2>
          {data?.tagline && (
            <p className="text-neutral-400 italic mt-1">{data.tagline}</p>
          )}

          <Divider />

          <div className="flex items-center gap-3 text-neutral-300">
            <p>⭐ {Number(data?.vote_average).toFixed(1)} / 10</p>
            <span>|</span>
            <p>👥 {Number(data?.vote_count).toLocaleString()} votes</p>
            <span>|</span>
            <p>⏱ {duration}</p>
          </div>

          <Divider />

          <h3 className="text-xl font-bold mb-1">Overview</h3>
          <p className="text-neutral-300">{data?.overview}</p>

          <Divider />

          <div className="flex flex-wrap items-center gap-4 text-neutral-300 text-sm">
            <p>Status: {data?.status || "N/A"}</p>
            <span>|</span>
            <p>
              Release:{" "}
              {data?.release_date
                ? moment(data.release_date).format("MMMM Do YYYY")
                : "N/A"}
            </p>
            <span>|</span>
            <p>Revenue: {revenue}</p>
          </div>

          <Divider />

          <p className="text-neutral-300">
            <span className="text-white font-medium">Director:</span> {director}
          </p>

          <Divider />

          <p className="text-neutral-300">
            <span className="text-white font-medium">Writer:</span> {writer}
          </p>

          <Divider />

          {/* Cast */}
          <h2 className="font-bold text-lg mt-4">Cast:</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((starCast) => (
                <div key={starCast.cast_id}>
                  <img
                    src={imageURL + starCast?.profile_path}
                    alt={starCast.name}
                    className="w-24 h-24 object-cover rounded-full shadow"
                  />
                  <p className="font-bold text-center text-sm text-neutral-400 mt-2">
                    {starCast?.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <HorizontalScollCard
          data={similarData}
          heading={`Similar ${params?.explore}`}
          media_type={params?.explore}
        />
        <HorizontalScollCard
          data={recommendationData}
          heading={`Recommendation ${params?.explore}`}
          media_type={params?.explore}
        />
      </div>

      {/* Video Modal */}
      {playVideo && (
        <VideoPlay
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params?.explore}
        />
      )}
    </main>
  );
};

export default DetailsPage;
