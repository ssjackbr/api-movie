package me.wup.movies.service;

import me.wup.movies.domain.dto.MovieDto;
import me.wup.movies.domain.entity.Movie;
import me.wup.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public Page<MovieDto> findAll(Pageable pageable){
        Page<Movie> moviesResult = movieRepository.findAll(pageable);
        Page<MovieDto> page = moviesResult.map(MovieDto::new);
        return page;
    }

    @Transactional(readOnly = true)
    public MovieDto findById (Long id){
        Movie movie = movieRepository.findById(id).get();
        MovieDto dto = new MovieDto(movie);
        return dto;
    }

}
