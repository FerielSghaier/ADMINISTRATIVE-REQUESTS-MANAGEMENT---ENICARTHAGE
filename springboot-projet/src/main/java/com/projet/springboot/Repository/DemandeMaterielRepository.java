package com.projet.springboot.Repository;

import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeMaterielRepository extends JpaRepository<DemandeMateriel,Long> {
    List<DemandeMateriel> findByEtat(Boolean etat);
    List<DemandeMateriel> findByOrganisationNom(String nom_org);
}
