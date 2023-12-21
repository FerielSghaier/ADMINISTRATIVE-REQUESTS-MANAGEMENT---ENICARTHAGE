package com.projet.springboot.Repository;

import com.projet.springboot.Entities.Proposition;
import com.projet.springboot.Entities.Reclamation;
import org.springframework.data.repository.CrudRepository;

public interface PropositionRepository extends CrudRepository<Proposition, Long> {
}
