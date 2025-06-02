import { useState, useEffect } from 'react';

// Custom hook for fetching jokes
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);

  const getJoke = async () => {
    try {
      // Set loading state first, then clear other states
      setLoading(true);
      setError(null);
      setData(null);
      
      // Add a small delay to ensure state updates are processed
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const jokeData = await response.json();
      
      // Set data first, then turn off loading
      setData(jokeData);
      await new Promise(resolve => setTimeout(resolve, 10));
      setLoading(false);
    } catch (err) {
      // Handle error state
      setData(null);
      setError(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    getJoke();
    // We only want to run this effect when the url changes
    // getJoke is defined inside the component and would cause an infinite loop if included
  }, [url]); // Dependency array includes url only

  return { data, loading, error, getJoke };
};

// Export the useFetch hook as a default export
export default useFetch;
