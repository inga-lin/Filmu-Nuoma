import star from '../img/star.svg';
//Movie List lentele
function MovieEdit({ movie, setDeleteId, setModalData }) {
    // movie List lentele
    return (
        <li className="list-group-item">
            <div className="movie-line">
                <div className="movie-line__content">
                    <span>{movie.title}</span>
                    <span>{movie.price} Euro</span>
                    <span>{['Documentary','Family','Animation','Drama','Horror'][movie.category - 1]}</span>
                    <div>
                    <img className="star" style={{ width: "45px", height: "45px" }} src={star} alt="star"></img>
                    <span>{movie.rating} </span>{/*is masyvo ['Leaf','Spike','Palm'] paimam viena konkretu elementa [movie.type - 1]*/}
                    </div>
                    
                </div>
                <div className="movie-line__buttons">
                <button type="button" className="btn btn-outline-primary m-1" onClick={()=>setModalData(movie)}>Edit</button>
                <button type="button" className="btn btn-outline-danger m-1" onClick={()=>setDeleteId({id:movie.id})}>Delete</button>
                </div>
            </div>
        </li>
    )
}
    
    export default MovieEdit;