import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const url = endpoint.includes('?')
          ? `${endpoint}&api_key=${process.env.REACT_APP_API_KEY}`
          : `${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`;

        const response = await axios.get(url, { signal: controller.signal });
        setData(response.data.results);
      } catch (err) {
        if (err.name !== 'CanceledError') {
          setError(err);
          console.error('Fetch error:', err);
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

export default useFetch;
