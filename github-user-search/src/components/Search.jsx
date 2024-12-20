import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Import service function

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepo) query.push(`repos:>${minRepo}`);
    const searchQuery = query.join("+");

    try {
      const data = await fetchUserData(searchQuery);
      setResults(data.items); // GitHub API returns results in `items` key
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Advanced Search</h1>
      <form onSubmit={handleFormSubmit} className="grid gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="p-2 border rounded"
        />
        <input
          type="number"
          value={minRepo}
          onChange={(e) => setMinRepo(e.target.value)}
          placeholder="Minimum repositories"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">Looks like we can't find the user.</p>
      )}
      <div className="mt-4 grid gap-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <p>
              <strong>Username:</strong> {user.login}
            </p>
            <p>
              <strong>Location:</strong> {user.location || "N/A"}
            </p>
            <p>
              <strong>Repositories:</strong> {user.public_repos || "N/A"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
