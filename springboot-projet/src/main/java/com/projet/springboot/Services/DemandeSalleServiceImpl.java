package com.projet.springboot.Services;

import com.projet.springboot.Entities.DemandeMateriel;
import com.projet.springboot.Entities.DemandeSalle;
import com.projet.springboot.Entities.DemandeSalleDto;
import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Exceptions.ResourceNotFoundException;
import com.projet.springboot.Repository.DemandeMaterielRepository;
import com.projet.springboot.Repository.DemandeSalleRepository;
import com.projet.springboot.Repository.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DemandeSalleServiceImpl implements DemandeSalleService{
    @Autowired
    DemandeSalleRepository demandeSalleRepository;
    @Autowired
    OrganisationRepository organisationRepository;
    @Override
    public DemandeSalle ajouterDemandeSalle(DemandeSalleDto demandeSalleDto) {
        DemandeSalle demande = new DemandeSalle();
        demande.setNumSalle(demandeSalleDto.getNumSalle());
        demande.setBatiment(demandeSalleDto.getBatiment());
        demande.setDate(demandeSalleDto.getDate());
        demande.setTemps(demandeSalleDto.getTemps());
        demande.setDuree(demandeSalleDto.getDuree());
        demande.setRaison(demandeSalleDto.getRaison());
        Organisation org = organisationRepository.findByNom(demandeSalleDto.getNom_org())
                .orElseThrow(() -> new ResourceNotFoundException("Organisation", "nom", demandeSalleDto.getNom_org()));
        return demandeSalleRepository.save(demande);
    }

    @Override
    public DemandeSalle modifierDemandeSalle(DemandeSalle demandeSalle) {
        return demandeSalleRepository.save(demandeSalle);
    }

    @Override
    public List<DemandeSalle> afficherDemandeSalle() {
        return demandeSalleRepository.findAll();
    }

    @Override
    public void supprimerById(Long id) {
        demandeSalleRepository.deleteById(id);
    }

    @Override
    public List<DemandeSalle> getDemandesEnAttente() {
        return demandeSalleRepository.findByEtat(null);
    }

    @Override
    public List<DemandeSalle> getDemandesAcceptees() {
        return demandeSalleRepository.findByEtat(true);
    }

    @Override
    public List<DemandeSalle> getDemandesRefusees() {
        return demandeSalleRepository.findByEtat(false);
    }

    @Override
    public DemandeSalle accepterDemandeSalle(Long id) {
        DemandeSalle demandeSalle = demandeSalleRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeSalle.setEtat(true);
        return demandeSalleRepository.save(demandeSalle);
    }

    @Override
    public DemandeSalle refuserDemandeSalle(Long id) {
        DemandeSalle demandeSalle = demandeSalleRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeSalle.setEtat(false);
        return demandeSalleRepository.save(demandeSalle);
    }

    @Override
    public List<DemandeSalle> listerDemandeSalleParClub(String nom_org) {
        return demandeSalleRepository.findByOrganisationNom(nom_org);
    }
}
