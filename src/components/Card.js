import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={props.image}
                alt={props.imageAlt}
                className="card-image" />
            
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-content">{props.content}</p>
            </div>
        </div>
    );
}
