const stats = [
    { id: 1, label: 'Servers Connected', value: 12 },
    { id: 2, label: 'Active Users', value: 340 },
    { id: 3, label: 'Commands Used Today', value: 87 },
    { id: 4, label: 'Error Logs', value: 1 },
];

function Stats() {
    return (
        <div className="stats">
            {stats.map((stat) => (
                <div key={stat.id} className="stat">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

export default Stats;
