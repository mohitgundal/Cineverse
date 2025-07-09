// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Card from '../components/Card'

// const ExplorePage = () => {
//   const params = useParams()
//   const [pageNo,setPageNo] = useState(1)
//   const [data,setData] = useState([])
//   const [totalPageNo,setTotalPageNo] = useState(0)

//   console.log("params",params.explore)

//   // const fetchData = async()=>{
//   //   try {
//   //       const response = await axios.get(`/discover/${params.explore}`,{
//   //         params : {
//   //           page : pageNo
//   //         }
//   //       })
//   //       setData((preve)=>{
//   //         return[
//   //             ...preve,
//   //             ...response.data.results
//   //         ]
//   //       })
//   //       setTotalPageNo(response.data.total_pages)
//   //   } catch (error) {
//   //       console.log('error',error)
//   //   }
//   // }


//   const fetchData = async () => {
//   try {
//     const API_KEY = process.env.REACT_APP_API_KEY; // Get your API key from .env
//     const response = await axios.get(`/discover/${params.explore}`, {
//       baseURL: "https://api.themoviedb.org/3", // Ensure base URL is set
//       params: {
//         api_key: API_KEY, // <-- Add this line!
//         page: pageNo
//       }
//     });
//     // setData((preve) => [
//     //   ...preve,
//     //   ...response.data.results
//     // ]);

//     setData(prev => {
//   const combined = [...prev, ...response.data.results];
//   // Use a Map to ensure uniqueness by id
//   const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
//   return unique;
// });

//     setTotalPageNo(response.data.total_pages);
//   } catch (error) {
//     console.log('error', error);
//   }
// }


//   const handleScroll = ()=>{
//     if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
//       setPageNo(preve => preve + 1)
//     }
//   }

//   useEffect(()=>{
//     fetchData()
//   },[pageNo])

//   useEffect(()=>{
//       setPageNo(1)
//       setData([])
//       fetchData()
//   },[params.explore])

//   useEffect(()=>{
//       window.addEventListener('scroll',handleScroll)
//   },[])



//   return (
//     <div className='py-16'>
//         <div className='container mx-auto'>
//             <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} show</h3>

//             <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
//               {
//                 data.map((exploreData,index)=>{
//                   return(
//                     <Card data={exploreData} key={exploreData.id+"exploreSEction"} media_type={params.explore}/>
//                   )
//                 })
//               }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ExplorePage




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Card from '../components/Card'

// const ExplorePage = () => {
//   const params = useParams()
//   const [pageNo, setPageNo] = useState(1)
//   const [data, setData] = useState([])
//   const [totalPageNo, setTotalPageNo] = useState(0)

//   const fetchData = async () => {
//     try {
//       const API_KEY = process.env.REACT_APP_API_KEY
//       const response = await axios.get(`/discover/${params.explore}`, {
//         baseURL: "https://api.themoviedb.org/3",
//         params: {
//           api_key: API_KEY,
//           page: pageNo
//         }
//       })

//       setData(prev => {
//         const combined = [...prev, ...response.data.results]
//         // Use a Map to ensure uniqueness by id
//         const unique = Array.from(new Map(combined.map(item => [item.id, item])).values())
//         return unique
//       })

//       setTotalPageNo(response.data.total_pages)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   const handleScroll = () => {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       setPageNo(preve => preve + 1)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [pageNo])

//   useEffect(() => {
//     setPageNo(1)
//     setData([])
//     fetchData()
//   }, [params.explore])

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <main className='py-16'>
//       <div className='container mx-auto'>
//         <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} show</h3>
//         <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
//           {data.map((exploreData, index) => (
//             <Card data={exploreData} key={exploreData.id + "exploreSEction"} media_type={params.explore} />
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// export default ExplorePage





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Card from '../components/Card';

// const ExplorePage = () => {
//   const params = useParams();
//   const [pageNo, setPageNo] = useState(1);
//   const [data, setData] = useState([]);
//   const [totalPageNo, setTotalPageNo] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     if (pageNo > totalPageNo && totalPageNo !== 0) return;

//     try {
//       setLoading(true);
//       const API_KEY = process.env.REACT_APP_API_KEY;
//       const response = await axios.get(`/discover/${params.explore}`, {
//         baseURL: "https://api.themoviedb.org/3",
//         params: {
//           api_key: API_KEY,
//           page: pageNo
//         }
//       });

//       setData(prev => {
//         const combined = [...prev, ...response.data.results];
//         const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
//         return unique;
//       });

//       setTotalPageNo(response.data.total_pages);
//     } catch (error) {
//       console.log('error', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleScroll = () => {
//     if ((window.innerHeight + window.scrollY + 50) >= document.body.offsetHeight) {
//       setPageNo(prev => {
//         if (prev < totalPageNo) return prev + 1;
//         return prev;
//       });
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [pageNo]);

//   // useEffect(() => {
//   //   // Reset when route changes
//   //   setPageNo(1);
//   //   setData([]);
//   //   setTotalPageNo(0);
//   // }, [params.explore]);

//   useEffect(() => {
//   // Reset and fetch on explore type change
//   setPageNo(1);
//   setData([]);
//   setTotalPageNo(0);
//   fetchData(); // Trigger initial fetch
// }, [params.explore]);


//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [totalPageNo]);

//   return (
//     <main className="py-16 min-h-screen bg-neutral-900 text-white">
//       <div className="container mx-auto px-3">
//         <h3 className="capitalize text-xl lg:text-2xl font-semibold mb-4">
//           Popular {params.explore === "tv" ? "TV Shows" : "Movies"}
//         </h3>

//         <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
//           {data.map((item, index) => (
//             <Card
//               key={item.id + "_explore"}
//               data={item}
//               media_type={params.explore}
//             />
//           ))}
//         </div>

//         {loading && (
//           <div className="text-center text-neutral-400 mt-6">Loading more...</div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default ExplorePage;





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (reset = false) => {
    if (pageNo > totalPageNo && !reset) return;

    try {
      setLoading(true);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await axios.get(`/discover/${params.explore}`, {
        baseURL: "https://api.themoviedb.org/3",
        params: {
          api_key: API_KEY,
          page: reset ? 1 : pageNo,
        }
      });

      const newResults = response.data.results || [];

      setData(prev => {
        const combined = reset ? newResults : [...prev, ...newResults];
        const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
        return unique;
      });

      setTotalPageNo(response.data.total_pages || 0);
    } catch (error) {
      console.log('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial and scroll fetch
  useEffect(() => {
    fetchData();
  }, [pageNo]);

  // When route changes (tv ↔ movies)
  useEffect(() => {
    setPageNo(1);
    setData([]);
    setTotalPageNo(0);
    fetchData(true); // reset = true
    window.scrollTo(0, 0); // scroll to top on switch
  }, [params.explore]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight && !loading) {
        setPageNo(prev => {
          if (prev < totalPageNo) return prev + 1;
          return prev;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalPageNo, loading]);

  return (
    <main className="py-16 min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-3">
        <h3 className="capitalize text-xl lg:text-2xl font-semibold mb-4">
          Popular {params.explore === "tv" ? "TV Shows" : "Movies"}
        </h3>

        <div
          className="grid gap-6 justify-center lg:justify-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
        >
          {data.map((item) => (
            <Card
              key={item.id + "_explore"}
              data={item}
              media_type={params.explore}
            />
          ))}
        </div>

        {loading && (
          <div className="text-center text-neutral-400 mt-6">Loading more...</div>
        )}
      </div>
    </main>
  );
};

export default ExplorePage;
