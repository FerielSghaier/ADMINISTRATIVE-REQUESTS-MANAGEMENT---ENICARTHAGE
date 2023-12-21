package com.projet.springboot.Repository;

import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeBusRepository extends JpaRepository<DemandeBus,Long> {
    List<DemandeBus> findByAcceptee(Boolean acceptee);
    List<DemandeBus> findByOrganisation(Organisation organisation);
    List<DemandeBus> findByOrganisationNom(String nom_org);

}
