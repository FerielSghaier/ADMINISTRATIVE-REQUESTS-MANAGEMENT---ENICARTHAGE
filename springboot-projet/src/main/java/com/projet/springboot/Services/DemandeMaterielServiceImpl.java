package com.projet.springboot.Services;

import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.DemandeMaterielDto;
import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Exceptions.ResourceNotFoundException;
import com.projet.springboot.Repository.DemandeBusRepository;
import com.projet.springboot.Repository.DemandeMaterielRepository;
import com.projet.springboot.Repository.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service

public class DemandeMaterielServiceImpl implements DemandeMaterielService {
    @Autowired
    DemandeMaterielRepository demandeMaterielRepository;
    @Autowired
    OrganisationRepository organisationRepository;
    @Override
    public DemandeMateriel ajouterDemandeMateriel(DemandeMaterielDto demandeMaterielDto) {
        DemandeMateriel demande = new DemandeMateriel();
        demande.setMateriel(demandeMaterielDto.getMateriel());
        demande.setDate(demandeMaterielDto.getDate());
        demande.setTemps(demandeMaterielDto.getTemps());
        demande.setDuree(demandeMaterielDto.getDuree());
        demande.setQuantite(demandeMaterielDto.getQuantite());
        demande.setRaison(demandeMaterielDto.getRaison());
        Organisation org = organisationRepository.findByNom(demandeMaterielDto.getNom_org())
                .orElseThrow(() -> new ResourceNotFoundException("Organisation", "nom", demandeMaterielDto.getNom_org()));
        return demandeMaterielRepository.save(demande);
    }

    @Override
    public DemandeMateriel modifierDemandeMateriel(DemandeMateriel demandeMateriel) {
        return demandeMaterielRepository.save(demandeMateriel);
    }

    @Override
    public List<DemandeMateriel> afficherDemandeMateriel() {
        return demandeMaterielRepository.findAll();

    }

    @Override
    public void supprimerById(Long id) {
        demandeMaterielRepository.deleteById(id);
    }

    @Override
    public List<DemandeMateriel> getDemandesEnAttente() {
        return demandeMaterielRepository.findByEtat(null);
    }

    @Override
    public List<DemandeMateriel> getDemandesAcceptees() {
        return demandeMaterielRepository.findByEtat(true);
    }

    @Override
    public List<DemandeMateriel> getDemandesRefusees() {
        return demandeMaterielRepository.findByEtat(false);
    }

    @Override
    public DemandeMateriel accepterDemandeMateriel(Long id) {
        DemandeMateriel demandeMateriel = demandeMaterielRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeMateriel.setEtat(true);
        return demandeMaterielRepository.save(demandeMateriel);
    }

    @Override
    public DemandeMateriel refuserDemandeMateriel(Long id) {
        DemandeMateriel demandeMateriel = demandeMaterielRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeMateriel.setEtat(false);
        return demandeMaterielRepository.save(demandeMateriel);
    }

    @Override
    public List<DemandeMateriel> listerDemandesMaterielParClub(String nom_org) {
        return demandeMaterielRepository.findByOrganisationNom(nom_org);
    }
}
