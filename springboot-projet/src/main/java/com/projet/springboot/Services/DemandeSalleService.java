package com.projet.springboot.Services;

import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.DemandeMaterielDto;
import com.projet.springboot.Entities.DemandeSalle;
import com.projet.springboot.Entities.DemandeSalleDto;

import java.util.List;

public interface DemandeSalleService {
    DemandeSalle ajouterDemandeSalle (DemandeSalleDto demandeSalleDto);
    DemandeSalle modifierDemandeSalle(DemandeSalle demandeSalle);
    // je vais afficher la liste des Organisations dans une liste
    List<DemandeSalle> afficherDemandeSalle();
    void supprimerById(Long id);
    List<DemandeSalle> getDemandesEnAttente();
    List<DemandeSalle> getDemandesAcceptees();
    List<DemandeSalle> getDemandesRefusees();
    DemandeSalle accepterDemandeSalle(Long id);
    DemandeSalle refuserDemandeSalle(Long id);
    List<DemandeSalle> listerDemandeSalleParClub(String nom_org);
}
