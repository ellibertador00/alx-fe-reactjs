import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Adjust the path as needed

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true); // Trigger error state on failure
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
      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>} {/* Error message */}
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

{
  /*import { useState } from "react";
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

} */
}
