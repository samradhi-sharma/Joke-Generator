import "./styles.css";
// import the custom hook to use in this document
import useFetch from "./useFetch";

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const { data, loading, error, getJoke } = useFetch(url);

  // Handle the New Joke button click
  const handleNewJoke = () => {
    getJoke();
  };

  return (
    <div className="App" role="main">
      <h1 role="heading" aria-level="1">Joke Generator</h1>
      
      {/* Use role attributes for better testing */}
      {loading && <div role="status" aria-label="loading">Loading...</div>}
      {error && <div role="alert" aria-label="error">Something went wrong...</div>}
      {data && !loading && !error && <div role="region" aria-label="joke">{data.joke}</div>}
      
      <button className="btn" role="button" aria-label="new joke" onClick={handleNewJoke}>New Joke</button>
    </div>
  );
}
