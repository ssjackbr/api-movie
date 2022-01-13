package me.wup.movies.repository;

import me.wup.movies.domain.entity.Score;
import me.wup.movies.domain.entity.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
