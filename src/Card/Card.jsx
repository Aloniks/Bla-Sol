import './Card.css';

function Card(props) {
    const { title, priceName, img } = props;
    return (
    
        <div className='card'>
            <img className='card-img' src={img} alt="food card 1" />
            <p>{title}</p>
            <p>{priceName}</p>
            <p className='time'>10 min</p>
            <p className='distance'>500 m</p>
            <button>Add</button>
        </div>
    );
}

export default Card;