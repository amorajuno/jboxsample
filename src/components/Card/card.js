import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img className='image' src={props.img} alt={props.name}></img>
            <p>{props.name}</p>
        </div>
    )
}

export default Card