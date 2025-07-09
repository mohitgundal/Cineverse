// // import React, { useRef } from 'react'
// // import Card from './Card'
// // import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// // const HorizontalScollCard = ({data = [], heading, trending, media_type}) => {
// //     const contaierRef = useRef()

// //     const handleNext = ()=>{
// //         contaierRef.current.scrollLeft += 300
// //     }
// //     const handlePrevious = ()=>{
// //         contaierRef.current.scrollLeft -= 300
// //     }
// //   return (
// //     <div className='container mx-auto px-3 my-10'>
// //           <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>

// //           <div className=' relative'>
// //                 <div  ref={contaierRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'>
// //                     {
// //                         data.map((data,index)=>{
// //                         return (
// //                             <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending} media_type={media_type}/>
// //                         )
// //                         })
// //                     }
// //                 </div>

// //                 <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
// //                     <button onClick={handlePrevious} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
// //                         <FaAngleLeft/>
// //                     </button>
// //                     <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
// //                         <FaAngleRight/>
// //                     </button>
// //                 </div>
// //           </div>

// //         </div>
// //   )
// // }

// // export default HorizontalScollCard

// import React, { useRef } from "react";
// import Card from "./Card";
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// const HorizontalScollCard = ({ data = [], heading, trending, media_type }) => {
//   const containerRef = useRef();

//   const handleNext = () => {
//     containerRef.current.scrollLeft += 300;
//   };
//   const handlePrevious = () => {
//     containerRef.current.scrollLeft -= 300;
//   };

//   // Keyboard navigation handler
//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowRight") handleNext();
//     if (e.key === "ArrowLeft") handlePrevious();
//   };

//   return (
//     <div className="container mx-auto px-3 my-10">
//       <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
//         {heading}
//       </h2>

//       <div className="relative">
//         <div
//           ref={containerRef}
//           // className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-none focus:outline focus:outline-2 focus:outline-white'
//           className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6
//     overflow-x-auto
//     scrollbar scrollbar-thumb-neutral-700 scrollbar-track-neutral-900
//     scrollbar-hide scrollbar-hover
//     transition-all
//     relative z-10 scroll-smooth
//     focus:outline-none"
//           tabIndex={0}
//           onKeyDown={handleKeyDown}
//           aria-label={`${heading} horizontal scroll`}
//         >
//           {data.map((item, index) => (
//             <Card
//               key={item.id + "heading" + index}
//               data={item}
//               index={index + 1}
//               trending={trending}
//               media_type={media_type}
//             />
//           ))}
//         </div>

//         <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
//           <button
//             onClick={handlePrevious}
//             className="bg-white p-1 text-black rounded-full -ml-2 z-10"
//             aria-label="Scroll left"
//           >
//             <FaAngleLeft />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-white p-1 text-black rounded-full -mr-2 z-10"
//             aria-label="Scroll right"
//           >
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScollCard;




// import React, { useRef } from "react";
// import Card from "./Card";
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// const HorizontalScollCard = ({ data = [], heading, trending, media_type }) => {
//   const containerRef = useRef();

//   const handleNext = () => {
//     containerRef.current.scrollLeft += 300;
//   };
//   const handlePrevious = () => {
//     containerRef.current.scrollLeft -= 300;
//   };

//   // Keyboard navigation handler
//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowRight") handleNext();
//     if (e.key === "ArrowLeft") handlePrevious();
//   };

//   return (
//     <div className="container mx-auto px-3 my-10">
//       <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
//         {heading}
//       </h2>

//       <div className="relative">
//         <div
//           ref={containerRef}
//           className="
//             grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6
//             overflow-x-auto
//             scrollbar-hide
//             transition-all
//             relative z-10 scroll-smooth
//             focus:outline-none
//           "
//           tabIndex={0}
//           onKeyDown={handleKeyDown}
//           aria-label={`${heading} horizontal scroll`}
//         >
//           {data.map((item, index) => (
//             <Card
//               key={item.id + "heading" + index}
//               data={item}
//               index={index + 1}
//               trending={trending}
//               media_type={media_type}
//             />
//           ))}
//         </div>

//         <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
//           <button
//             onClick={handlePrevious}
//             className="bg-white p-1 text-black rounded-full -ml-2 z-10"
//             aria-label="Scroll left"
//           >
//             <FaAngleLeft />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-white p-1 text-black rounded-full -mr-2 z-10"
//             aria-label="Scroll right"
//           >
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScollCard;




import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrevious();
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="
            grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6
            overflow-x-auto
            scrollbar-hide
            transition-all
            relative z-10 scroll-smooth
            focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
          "
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`${heading} horizontal scroll`}
        >
          {data.map((item, index) => (
            <Card
              key={item.id + "heading" + index}
              data={item}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full shadow transition"
            aria-label="Scroll left"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full shadow transition"
            aria-label="Scroll right"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
