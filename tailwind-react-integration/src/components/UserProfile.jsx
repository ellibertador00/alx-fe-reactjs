function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 shadow-lg rounded-lg mx-auto my-20   max-w-xs md:max-w-sm">
      <img className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24" src="https://via.placeholder.com/150" alt="User" />
      <h1 className=" sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className=" sm:text-sm text-gray-600 md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
