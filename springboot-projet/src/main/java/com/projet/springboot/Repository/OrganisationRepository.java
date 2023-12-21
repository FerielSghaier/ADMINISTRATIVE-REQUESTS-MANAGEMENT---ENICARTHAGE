package com.projet.springboot.Repository;

import com.projet.springboot.Entities.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrganisationRepository extends JpaRepository<Organisation,Long> {
    Organisation findByEmail(String email);
    Optional<Organisation> findByNom(String nom);
    Boolean existsByEmail(String email);
    List<Organisation> findByEtat(Boolean etat);

}
