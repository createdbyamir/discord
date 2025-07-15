

function Features(props){
    return (
        <div className="feature-card">
            <div className="feature-icon">{props.icon}</div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Features