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
                    <span><img className="star" style={{ width: "45px", height: "45px" }} src={star} alt="star"></img>{movie.rating} </span>
                </div>
            </div>
        </li>
    )

}
export default MovieLine;