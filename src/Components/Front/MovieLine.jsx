import star from './img/star.svg';
//is Front/MovieLine.jsx
function MovieLine ({movie}) {
 
    return (
        <li className="list-group-item">
            <div className="movie-line">
                <div className="movie-line__content">
                    <span>{movie.title}</span>
                    <span>{movie.price} Euro</span>
                    <span>{['Documentary','Family','Animation','Drama','Horror'][movie.category - 1]}</span>
                    <span>Rating: {movie.rating} </span>{/*is masyvo ['Leaf','Spike','Palm'] paimam viena konkretu elementa [movie.type - 1]*/}
                    <img className="star" style={{ width: "25px", height: "25px" }} src={star} alt="star"></img>  
                </div>
            </div>
        </li>
    )

}
export default MovieLine;