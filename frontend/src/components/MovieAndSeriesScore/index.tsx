import MovieAndSeriesStars from "../MovieAndSeriesStars";
import './styles.css';

type Props = {
    score : number;
    count : number;
}
function MovieAndSeriesScore({score, count} : Props) {

    return (
        <div className="api-movie-score-container">
            <p className="api-movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieAndSeriesStars score={score}/>
            <p className="api-movie-score-count">{count} avaliações</p>
        </div>
    );
}
export default MovieAndSeriesScore;