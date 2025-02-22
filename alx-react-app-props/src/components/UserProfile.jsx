import { useContext } from "react";
import UserContext from "./UserContext"; // Ensure the correct path

function UserProfile() {
  const userData = useContext(UserContext); // Use Context API

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
