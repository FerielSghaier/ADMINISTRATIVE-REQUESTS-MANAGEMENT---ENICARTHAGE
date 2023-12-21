package com.projet.springboot.Services;

import com.projet.springboot.Entities.Organisation;

import java.util.List;
import java.util.Optional;

public interface OrganisationService {
    void ajouterOrganisation (Organisation organisation);
    void confirmOrganisation(Long id);
    Organisation modifierOrganisation(Organisation organisation);
    // je vais afficher la liste des Organisations dans une liste
    List<Organisation> afficherOrganisation();
    void supprimerById(Long id);
    List<Organisation> getOrgEnAttente();
    List<Organisation> getOrgsAcceptees();
    //
    Optional<Organisation> getOrganisationById(Long id);
}
