import { useState, useEffect } from 'react';

function Welcome() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsername('Amir');
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="welcome">
            <h2>Welcome back, {username}!</h2>
            <p>Here's what's happening with Nexa.</p>
        </div>
    );
}

export default Welcome;
