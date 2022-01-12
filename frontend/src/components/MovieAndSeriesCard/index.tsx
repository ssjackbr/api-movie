import MovieAndSeriesScore from "components/MovieAndSeriesScore";

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
                <div className="btn btn-primary api-movie-btn">Avaliar</div>
            </div>
        </div>
    );
}
export default MovieAndSeriesCard;