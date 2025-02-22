import React from 'react';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import { UserContext } from './UserContext'; // Import UserContext

function App() {
    // Define userData
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        // Wrap ProfilePage with UserContext.Provider
        <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
    );
}

export default App;