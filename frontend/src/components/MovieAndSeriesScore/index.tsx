import MovieAndSeriesStars from "../MovieAndSeriesStars";
import './styles.css';

function MovieAndSeriesScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="api-movie-score-container">
            <p className="api-movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieAndSeriesStars />
            <p className="api-movie-score-count">{count} avaliações</p>
        </div>
    );
}
export default MovieAndSeriesScore;