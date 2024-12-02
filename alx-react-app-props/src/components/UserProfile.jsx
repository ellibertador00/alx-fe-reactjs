import UserContext from "./components/UserContext";
import { useContext } from "react";

function UserProfile() {
  const { text } = useContext(UserContext);
  return (
    <div>
      <p>Name: {text.name}</p>
      <p>Email: {text.email}</p>
      yooo
    </div>
  );
}

export default UserProfile;
