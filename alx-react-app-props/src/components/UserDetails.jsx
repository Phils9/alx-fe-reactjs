import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import UserContext

function UserDetails() {
    // Consume UserContext using useContext
    const userData = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;