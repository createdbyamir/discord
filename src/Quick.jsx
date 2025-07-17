import { useNavigate } from 'react-router-dom';

function QuickActions() {
    const navigate = useNavigate();

    return (
        <div className="quick-actions">
            <button onClick={() => navigate('/settings')}>Settings</button>
            <button onClick={() => navigate('/logs')}>View Logs</button>
            <button onClick={() => window.open('https://discord.com/oauth2/authorize?...', '_blank')}>Invite Nexa</button>
            <button onClick={() => window.open('https://your-docs-link.com', '_blank')}>Documentation</button>
        </div>
    );
}

export default QuickActions;
