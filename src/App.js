// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData,setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch()

//   const fetchTrendingData = async()=>{
//     try {
//         const response = await axios.get('/trending/all/week')

//         dispatch(setBannerData(response.data.results))
//     } catch (error) {
//         console.log("error",error)
//     }
//   }

//   const fetchConfiguration = async()=>{
//     try {
//         const response = await axios.get("/configuration")

//         dispatch(setImageURL(response.data.images.secure_base_url+"original"))
//     } catch (error) {
      
//     }
//   }

//   useEffect(()=>{
//     fetchTrendingData()
//     fetchConfiguration()
//   },[])
  
//   return (
//     <main className='pb-14 lg:pb-0'>
//         <Header/>
//         <div className='min-h-[90vh]'>
//             <Outlet/>
//         </div>
//         <Footer/>
//         <MobileNavigation/>
//     </main>
//   );
// }

// export default App;


// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData, setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch();

//   const fetchTrendingData = async () => {
//     try {
//       const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setBannerData(response.data.results));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const fetchConfiguration = async () => {
//     try {
//       const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setImageURL(response.data.images.secure_base_url + "original"));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingData();
//     fetchConfiguration();
//   }, []);

//   return (
//     <main className='pb-14 lg:pb-0'>
//       <Header />
//       <div className='min-h-[90vh]'>
//         <Outlet />
//       </div>
//       <Footer />
//       <MobileNavigation />
//     </main>
//   );
// }

// export default App;





// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData, setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch();

//   const fetchTrendingData = async () => {
//     try {
//       const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setBannerData(response.data.results));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const fetchConfiguration = async () => {
//     try {
//       const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setImageURL(response.data.images.secure_base_url + "original"));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingData();
//     fetchConfiguration();
//   }, []);

//   return (
//     <>
//       <header>
//         <Header />
//       </header>
//       <main className='pb-14 lg:pb-0 min-h-[90vh]'>
//         <Outlet />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//       <MobileNavigation />
//     </>
//   );
// }

// export default App;




// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Loader from "./components/Loader";
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData, setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch();

//   const fetchTrendingData = async () => {
//     try {
//       const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setBannerData(response.data.results));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const fetchConfiguration = async () => {
//     try {
//       const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setImageURL(response.data.images.secure_base_url + "original"));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingData();
//     fetchConfiguration();
//   }, []);

//   return (
//     // Main App Wrapper with dark/light mode support
//     <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
//       <header>
//         <Header />
//       </header>
//       <main className='pb-14 lg:pb-0 min-h-[90vh]'>
//         <Outlet />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//       <MobileNavigation />
//     </div>
//   );
// }

// export default App;





// import { Outlet, useLocation } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Loader from "./components/Loader";
// import SearchResults from "./pages/SearchResults";
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData, setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const [loading, setLoading] = useState(true); // global loader

//   const fetchTrendingData = async () => {
//     try {
//       const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setBannerData(response.data.results));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const fetchConfiguration = async () => {
//     try {
//       const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setImageURL(response.data.images.secure_base_url + "original"));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // App initialization
//   useEffect(() => {
//     const loadAppData = async () => {
//       try {
//         setLoading(true);
//         await fetchTrendingData();
//         await fetchConfiguration();
//       } catch (err) {
//         console.log("Initialization error", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAppData();
//   }, []);

//   // Show loader briefly on route change (optional smooth transition)
//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 300); // 300ms for smooth UX
//     return () => clearTimeout(timeout);
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      
//       {loading && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <Loader />
//         </div>
//       )}

//       <header>
//         <Header />
//       </header>

//       <main className='pb-14 lg:pb-0 min-h-[90vh]'>
//         <Outlet />
//       </main>

//       <footer>
//         <Footer />
//       </footer>

//       <MobileNavigation />
//     </div>
//   );
// }

// export default App;







// import { Outlet, useLocation } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Loader from "./components/Loader";
// import ScrollToTop from "./components/ScrollToTop";
// import MobileNavigation from './components/MobileNavigation';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBannerData, setImageURL } from './store/movieoSlice';

// function App() {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   const fetchTrendingData = async () => {
//     try {
//       const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setBannerData(response.data.results));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const fetchConfiguration = async () => {
//     try {
//       const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
//       dispatch(setImageURL(response.data.images.secure_base_url + "original"));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     const loadAppData = async () => {
//       try {
//         setLoading(true);
//         await fetchTrendingData();
//         await fetchConfiguration();
//       } catch (err) {
//         console.log("Initialization error", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAppData();
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
//       {loading && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <Loader />
//         </div>
//       )}

//       <Header />

//       <main className="pb-14 lg:pb-0 min-h-[90vh]">
//         <Outlet />
//       </main>

//       <Footer />
//       <MobileNavigation />
//     </div>
//   );
// }

// export default App;





import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieoSlice';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get(`/configuration?api_key=${process.env.REACT_APP_API_KEY}`);
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const loadAppData = async () => {
      try {
        setLoading(true);
        await fetchTrendingData();
        await fetchConfiguration();
      } catch (err) {
        console.log("Initialization error", err);
      } finally {
        setLoading(false);
      }
    };

    loadAppData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">

      {/* ✅ Scroll to top on every route change */}
      <ScrollToTop />

      {loading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      <Header />

      <main className="pb-14 lg:pb-0 min-h-[90vh]">
        <Outlet />
      </main>

      <Footer />
      <MobileNavigation />
    </div>
  );
}

export default App;
