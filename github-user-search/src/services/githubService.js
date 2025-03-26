import axios from 'axios';

export const fetchUserData = async (username, location, repos) => {
  try {
    const queryParts = [];
    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (repos) queryParts.push(`repos:>${repos}`);

    const query = queryParts.join('+');
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=10`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        },
      }
    );
    return response.data;
  } catch (error) { //  Keep `error` but use it in the message
    console.error("API Error:", error.response?.data); 
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};