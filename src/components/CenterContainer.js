import './CenterContainer.css';

export default function CenterContainer(props) {
    return (
        <div className="center-container" {...props}>
            {props.children}
        </div>
    );
}
