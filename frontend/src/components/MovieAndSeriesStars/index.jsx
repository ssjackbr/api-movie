import {ReactComponent as StarFull} from 'assets/img/star-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/star-empity.svg';
import './styles.css';

function MovieAndSeriesStars() {

    return (

        <div className="api-movie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
export default MovieAndSeriesStars;