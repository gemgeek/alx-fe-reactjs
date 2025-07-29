import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

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
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSearch} className="space-y-4 p-4 bg-white shadow rounded-md max-w-xl mx-auto">
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded"
  />
  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded"
  />
  <input
    type="number"
    placeholder="Minimum Repositories"
    value={minRepos}
    onChange={(e) => setMinRepos(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded"
  />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Search
  </button>
</form>

{loading && <p className="text-center mt-4">Loading...</p>}
{error && <p className="text-center text-red-600 mt-4">Looks like we cant find the user</p>}

{results.length > 0 && (
  <div className="grid gap-4 mt-6 max-w-xl mx-auto">
    {results.map((user) => (
      <div key={user.id} className="p-4 border rounded shadow flex items-center space-x-4">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div>
          <p className="font-semibold">{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View Profile
          </a>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  );
}

export default Search;