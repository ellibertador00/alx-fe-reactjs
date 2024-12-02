function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 shadow-lg rounded-lg mx-auto my-20 max-w-sm">
      <img className="rounded-full w-36 h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;