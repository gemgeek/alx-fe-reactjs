const headers = {
  Accept: 'application/vnd.github.v3+json',
};
const response = await axios.get(url, { headers });

import axios from 'axios';

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};