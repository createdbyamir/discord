import Stats from './Stats.jsx';
import QuickActions from './Quick.jsx';
import Welcome from './Welcome.jsx';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="dashboard">
            <Welcome />
            <Stats />
            <QuickActions />
        </div>
    );
}

export default Dashboard;
