import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="api-movie-pagination-container">
            <div className="api-movie-pagination-box">
                <button className="api-movie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="api-movie-pagination-button" disabled={false} >
                    <Arrow className="api-movie-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}
export default Pagination;