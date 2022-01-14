package me.wup.movies.service;

import me.wup.movies.domain.dto.MovieDto;
import me.wup.movies.domain.dto.ScoreDto;
import me.wup.movies.domain.entity.Movie;
import me.wup.movies.domain.entity.Score;
import me.wup.movies.domain.entity.User;
import me.wup.movies.repository.MovieRepository;
import me.wup.movies.repository.ScoreRepository;
import me.wup.movies.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDto saveScore(ScoreDto dto) {

        User user = userRepository.findByEmail(dto.getEmail());

        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Movie movie = movieRepository.findById(dto.getMovieId()).get();
        Score score = new Score();
        score.setMovie(movie);
        score.setUser(user);
        score.setValue(dto.getScore());
        score = scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : movie.getScores()) {
            sum = sum + s.getValue();
        }

        double avg = sum / movie.getScores().size();
        movie.setScore(avg);
        movie.setCount(movie.getScores().size());
        return new MovieDto(movie = movieRepository.save(movie));
    }

}
