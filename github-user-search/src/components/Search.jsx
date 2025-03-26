import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchUserData(username, location, repos);
      setUsers(data.items || []);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          id="location"
          name="location"
          autoComplete="country-name" 
          placeholder="Location (e.g., Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          id="repos"
          name="repos"
          autoComplete="off"
          placeholder="Min Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      {isLoading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                <p>{user.location || 'Location not specified'}</p>
                <p>Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;