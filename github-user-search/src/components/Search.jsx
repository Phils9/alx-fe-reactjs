// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Results will go here */}
      <div className="results">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {userData && (
          <div className="user-card">
            <img src={userData.avatar_url} alt="User avatar" />
            <h2>{userData.name || userData.login}</h2>
            <p>Followers: {userData.followers}</p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
                View Profile
            </a>
          </div>
        )}
      </div>
    </div>

  );
};

export default Search;

