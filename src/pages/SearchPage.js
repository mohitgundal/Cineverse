import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q");

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    if (!query || !hasMore) return;

    try {
      const response = await axios.get(`/search/multi`, {
        baseURL: "https://api.themoviedb.org/3",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: query,
          page: page,
        },
      });

      const newResults = response.data.results || [];

      if (newResults.length === 0) {
        setHasMore(false);
        return;
      }

      setData((prev) => {
        const combined = [...prev, ...newResults];
        const unique = Array.from(new Map(combined.map(item => [item.id + item.media_type, item])).values());
        return unique;
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  // Reset on query change
  // useEffect(() => {
  //   if (query) {
  //     setData([]);
  //     setPage(1);
  //     setHasMore(true);
  //   }
  // }, [query]);

  // Reset & fetch fresh data on query change
useEffect(() => {
  if (!query) return;

  setData([]);
  setPage(1);
  setHasMore(true);

  fetchData(); // 👈 this is what was missing
}, [query]);


  // Fetch on page change
  // useEffect(() => {
  //   if (query) {
  //     fetchData();
  //   }
  // }, [page]);

  useEffect(() => {
  if (!query || page === 1) return; // Already handled in query change effect
  fetchData();
}, [query, page]);


  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight && hasMore) {
        setPage(prev => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <main className='py-16 min-h-screen bg-neutral-900 text-white'>
      {/* Mobile Search Bar */}
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
        <input
          type='text'
          placeholder='Search here...'
          aria-label="Search input"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query || ""}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
        />
      </div>

      <div className='container mx-auto px-3'>
        <h3 className='capitalize text-xl lg:text-2xl font-semibold mb-4'>
          Search Results for: <span className="italic">{query}</span>
        </h3>

        <div
          className="grid gap-6 justify-center lg:justify-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
        >
          {data.map((item) =>
            (item.media_type === "movie" || item.media_type === "tv") && (
              <Card
                key={`${item.id}_${item.media_type}_search`}
                data={item}
                media_type={item.media_type}
              />
            )
          )}
        </div>

        {!hasMore && data.length === 0 && (
          <p className='text-center text-neutral-400 mt-8'>No results found.</p>
        )}
      </div>
    </main>
  );
};

export default SearchPage;

