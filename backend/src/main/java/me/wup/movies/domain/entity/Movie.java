package me.wup.movies.domain.entity;

import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "tb_movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank
    @Column(name = "title")
    private String title;

    @Column(name = "review")
    private String review;

    @NotNull
    @NotBlank
    @Column(name = "image_url")
    private String image;

    @NotNull
    @NotBlank
    @Column(name = "score")
    private Double score;

    @Column(name = "count")
    private Integer count;

}
