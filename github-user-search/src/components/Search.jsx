import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import "../App.css";

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData({ username, location, minRepos });
      setResults(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(true);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Search for a GitHub User</h1>
      <form onSubmit={handleSearch} className="space-y-4 form-wrapper">
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-4 py-3 rounded-lg hover:bg-pink-600 transition duration-200 font-medium"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-6 text-pink-600">Loading...</p>}
      {error && (
        <p className="text-center mt-4 text-red-600">
          Looks like we cant find the user.
        </p>
      )}

      {results.length > 0 && (
        <div className="grid gap-6 mt-8 max-w-3xl mx-auto">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-6 p-6 border rounded-lg shadow-sm bg-white"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full border border-gray-200"
              />
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  {user.login}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;