import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utils/requests';
import { Movie } from 'types/movie';
import './styles.css';

type Props = { 
    movieId: string;
 }


function FormCard( {movieId} : Props) {
    
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(respons => {
            setMovie(respons.data);
        });
    })
    return (
        <div className="api-movie-form-container">
            <img className="api-movie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="api-movie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="api-movie-form">
                    <div className="form-group api-movie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group api-movie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="api-movie-form-btn-container">
                        <button type="submit" className="btn btn-primary api-movie-btn">Salvar</button>
                    </div>
                </form >

                <Link to="/">
                    <button className="btn btn-primary api-movie-btn mt-3">Cancelar</button>
                </Link>

            </div >
        </div >
    );
}

export default FormCard;