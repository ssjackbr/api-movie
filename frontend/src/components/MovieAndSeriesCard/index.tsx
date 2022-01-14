import MovieAndSeriesScore from "components/MovieAndSeriesScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import './style.css';

type Props = {movie: Movie}

function MovieAndSeriesCard( {movie}: Props) {


    return (
        <div>
            <img className="api-movie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="api-movie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieAndSeriesScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary api-movie-btn">Avaliar</div>
                </Link> 
            </div>
        </div>
    );
}
export default MovieAndSeriesCard;