import { useContext } from 'react';
import UserContext from '../UserContext'; // NOTE: '..' to go up one level

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;