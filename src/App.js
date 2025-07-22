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
