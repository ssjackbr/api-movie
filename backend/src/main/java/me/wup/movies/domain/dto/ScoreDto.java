package me.wup.movies.domain.dto;

import lombok.*;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ScoreDto {

    private Long movieId;
    private String email;
    private Double score;
    private String review;
}
