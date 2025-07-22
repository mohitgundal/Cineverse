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
