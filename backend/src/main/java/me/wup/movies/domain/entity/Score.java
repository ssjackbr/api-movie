package me.wup.movies.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePK id = new ScorePK();

    @Column(name = "value")
    private Double value;

    public void setMovie(Movie movie){
        id.setMovie(movie);
    }

    public void setUser (User user){
        id.setUser(user);
    }

}
