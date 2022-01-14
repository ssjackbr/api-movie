package me.wup.movies.domain.dto;

import lombok.*;
import me.wup.movies.domain.entity.Movie;

@Getter
@Setter
@EqualsAndHashCode
public class MovieDto {

    private Long id;
    private String title;
    private String image;
    private Double score;
    private Integer count;

    public MovieDto (Long id, String title, String image, Double score, Integer count){
        this.id = id;
        this.title = title;
        this.image = image;
        this.score = score;
        this.count = count;
    }

    public MovieDto (Movie movie){
        id = movie.getId();
        title = movie.getTitle();
        image = movie.getImage();
        score = movie.getScore();
        count = movie.getCount();
    }
}
