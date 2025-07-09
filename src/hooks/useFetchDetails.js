// // import axios from "axios"
// // import { useEffect, useState } from "react"

// // const useFetchDetails = (endpoint)=>{
// //     const [data,setData] = useState()
// //     const [loading,setLoading] = useState(false)

// //     const fetchData = async()=>{
// //         try {
// //             setLoading(true)
// //             const response = await axios.get(endpoint)
// //             setLoading(false)
// //             setData(response.data)
// //         } catch (error) {
// //             console.log('error',error)
// //        }
// //     }

// //     useEffect(()=>{
// //         fetchData()
// //     },[endpoint])

// //     return { data , loading}
// // }

// // export default useFetchDetails




// import axios from "axios"
// import { useEffect, useState } from "react"

// const useFetchDetails = (endpoint) => {
//     const [data, setData] = useState()
//     const [loading, setLoading] = useState(false)

//     const fetchData = async () => {
//         try {
//             setLoading(true)
//             // Get your API key from .env
//             const API_KEY = process.env.REACT_APP_API_KEY
//             // Always use the full TMDb base URL
//             const baseUrl = "https://api.themoviedb.org/3"
//             // Append the API key to the endpoint
//             const url = endpoint.includes('?')
//                 ? `${baseUrl}${endpoint}&api_key=${API_KEY}`
//                 : `${baseUrl}${endpoint}?api_key=${API_KEY}`

//             const response = await axios.get(url)
//             setData(response.data)
//         } catch (error) {
//             console.log('error', error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, [endpoint])

//     return { data, loading }
// }

// export default useFetchDetails




import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const baseUrl = "https://api.themoviedb.org/3";

    const fetchData = async () => {
      try {
        setLoading(true);
        const url = endpoint.includes('?')
          ? `${baseUrl}${endpoint}&api_key=${API_KEY}`
          : `${baseUrl}${endpoint}?api_key=${API_KEY}`;

        const response = await axios.get(url, { signal: controller.signal });
        setData(response.data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err);
          console.error("useFetchDetails error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchDetails;
