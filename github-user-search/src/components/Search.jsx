

import React, { useState } from "react";
import fetchUserData from "./services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // To capture input
  const [userData, setUserData] = useState(null); // To store API response
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(false); // To handle error state

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Store the data in state
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on API call status */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {userData && (
        <div>
          <h2>User Details</h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
          />
          <p>
            <strong>Name:</strong> {userData.name || "N/A"}
          </p>
          <p>
            <strong>GitHub Profile:</strong>{" "}
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.html_url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;

















{/*import { useState } from "react";
import { FetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState('');
  const [userdata, setUserdata] = useState();

  const 
  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
         
      </form>

    </div>
  )

} */}

