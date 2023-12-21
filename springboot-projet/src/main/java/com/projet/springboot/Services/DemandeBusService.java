package com.projet.springboot.Services;

import com.projet.springboot.Entities.Admin;
import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.DemandeBusDto;
import com.projet.springboot.Entities.Organisation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface DemandeBusService {
    DemandeBus ajouterDemandeBus (DemandeBusDto demandeBusDto);
    DemandeBus modifierDemandeBus(DemandeBus demandeBus);
    // je vais afficher la liste des Organisations dans une liste
    List<DemandeBus> afficherDemandeBus();
    void supprimerById(Long id);
    List<DemandeBus> getDemandesEnAttente();
    List<DemandeBus> getDemandesAcceptees();
    List<DemandeBus> getDemandesRefusees();
    DemandeBus accepterDemandeBus(Long id);
    DemandeBus refuserDemandeBus(Long id);
    List<DemandeBus> listerDemandesBusParClub(String nom_org);

}
