import axios from "axios";

/**
 * Fetches GitHub users based on search criteria.
 *
 * @param {string} username - The username to search for (optional).
 * @param {string} location - The location of the user (optional).
 * @param {number} minRepos - The minimum number of repositories (optional).
 * @returns {Promise} - A promise resolving to the search results.
 */
const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    // Construct the query string for advanced search
    let query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const queryString = query.join("+"); // Combine criteria with '+'

    // GitHub Search API endpoint
    const response = await axios.get(
      `https://api.github.com/search/users?q=${queryString}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};

export { fetchUserData };
