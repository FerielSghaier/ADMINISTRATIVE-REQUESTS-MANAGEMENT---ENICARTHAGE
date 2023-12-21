package com.projet.springboot.Services;


import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.DemandeMaterielDto;

import java.util.List;

public interface DemandeMaterielService {
    DemandeMateriel ajouterDemandeMateriel (DemandeMaterielDto demandeMaterielDto);
    DemandeMateriel modifierDemandeMateriel(DemandeMateriel demandeMateriel);
    // je vais afficher la liste des Organisations dans une liste
    List<DemandeMateriel> afficherDemandeMateriel();
    void supprimerById(Long id);
    List<DemandeMateriel> getDemandesEnAttente();
    List<DemandeMateriel> getDemandesAcceptees();
    List<DemandeMateriel> getDemandesRefusees();
    DemandeMateriel accepterDemandeMateriel(Long id);
    DemandeMateriel refuserDemandeMateriel(Long id);
    List<DemandeMateriel> listerDemandesMaterielParClub(String nom_org);
}
