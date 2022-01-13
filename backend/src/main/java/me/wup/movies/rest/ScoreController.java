package me.wup.movies.rest;

import me.wup.movies.domain.dto.MovieDto;
import me.wup.movies.domain.dto.ScoreDto;
import me.wup.movies.domain.entity.Movie;
import me.wup.movies.service.MovieService;
import me.wup.movies.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService serviceScore;

    @PutMapping
    public MovieDto saveScore (@RequestBody ScoreDto scoreDto){
        MovieDto movieDto = serviceScore.saveScore(scoreDto);
        return movieDto;
    }

}
