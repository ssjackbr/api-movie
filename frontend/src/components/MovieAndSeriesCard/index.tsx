import MovieAndSeriesScore from "components/MovieAndSeriesScore";
import { Link } from "react-router-dom";
import './style.css';

function MovieAndSeriesCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
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