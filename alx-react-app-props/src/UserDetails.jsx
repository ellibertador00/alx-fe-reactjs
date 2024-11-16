import { userContext } from "./UserContext";
import { useContext } from "react";

function UserDetails() {
  const { text } = useContext(userContext);
  return (
    <div>
      <p>Name: {text.name}</p>
      <p>Email: {text.email}</p>
      yooo
    </div>
  );
}

export default UserDetails;
