package com.projet.springboot.Repository;

import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.DemandeSalle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeSalleRepository extends JpaRepository<DemandeSalle,Long> {
    List<DemandeSalle> findByEtat(Boolean etat);
    List<DemandeSalle> findByOrganisationNom(String nom_org);
}
