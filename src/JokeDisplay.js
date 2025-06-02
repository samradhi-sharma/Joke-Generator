import React from 'react';

// This component handles displaying the joke or appropriate status messages
const JokeDisplay = ({ loading, error, joke }) => {
  if (loading) {
    // Use data-testid for loading state
    return <p data-testid="loading-state" className="loading-status" aria-live="polite">Loading...</p>;
  }
  
  if (error) {
    // Use data-testid for error state
    return <p data-testid="error-state" className="error-status" aria-live="assertive">Something went wrong...</p>;
  }
  
  if (joke) {
    // Use data-testid for joke content
    return <h2 data-testid="joke-content" className="joke-content" aria-live="polite">{joke}</h2>;
  }
  
  // Return an empty div with a data-testid when no content
  return <div data-testid="empty-state"></div>;
};

export default JokeDisplay;
