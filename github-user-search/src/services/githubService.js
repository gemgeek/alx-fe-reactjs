import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // If location or minRepos is provided, use the advanced search API
    if (location || minRepos) {
      const queryParts = [];

      if (username) queryParts.push(username);
      if (location) queryParts.push(`location:${location}`);
      if (minRepos) queryParts.push(`repos:>${minRepos}`);

      const query = queryParts.join('+');
      const url = `https://api.github.com/search/users?q=${query}`;
      const response = await axios.get(url);
      return response.data.items;
    } else {
      // Simple user fetch
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return [response.data]; // Wrap in array for consistency
    }
  } catch (error) {
    throw new Error('User not found');
  }
};