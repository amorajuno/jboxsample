import './Card.css';

const Card = (props) => {

    // const [wishList, setWishlist] = ([]);


    return (
        <div className='card'>
            <img className='image' src={props.img} alt={props.name}></img>
            <p>{props.name}</p>
            {/* <button className='likeBtn' ><img src="https://matthewgferrari.github.io/react-heart/example/demo.gif" alt="save"/></button> */}
        </div>
    )
}

export default Card