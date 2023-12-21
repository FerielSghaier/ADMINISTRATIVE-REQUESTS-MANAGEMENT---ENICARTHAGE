package com.projet.springboot.Services;

import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.DemandeBusDto;
import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Exceptions.ResourceNotFoundException;
import com.projet.springboot.Repository.DemandeBusRepository;
import com.projet.springboot.Repository.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DemandeBusServiceImpl implements DemandeBusService{
    @Autowired
    DemandeBusRepository demandeBusRepository;
    @Autowired
    OrganisationRepository organisationRepository;
    @Override
    public DemandeBus ajouterDemandeBus(DemandeBusDto demandeBusDto) {

        DemandeBus demande = new DemandeBus();
        demande.setDestination(demandeBusDto.getDestination());
        demande.setDateDep(demandeBusDto.getDateDep());
        demande.setDateArr(demandeBusDto.getDateArr());
        demande.setHeureDep(demandeBusDto.getHeureDep());
        demande.setHeureArr(demandeBusDto.getHeureArr());
        demande.setRaison(demandeBusDto.getRaison());
        Organisation org = organisationRepository.findByNom(demandeBusDto.getNom_org())
                .orElseThrow(() -> new ResourceNotFoundException("Organisation", "nom", demandeBusDto.getNom_org()));
        return demandeBusRepository.save(demande);
    }

    @Override
    public DemandeBus modifierDemandeBus(DemandeBus demandeBus) {
        return demandeBusRepository.save(demandeBus);
    }

    @Override
    public List<DemandeBus> afficherDemandeBus() {
        return demandeBusRepository.findAll();
    }

    @Override
    public void supprimerById(Long id) {
        demandeBusRepository.deleteById(id);
    }

    @Override
    public List<DemandeBus> getDemandesEnAttente() {
        return demandeBusRepository.findByAcceptee(null);
    }

    @Override
    public List<DemandeBus> getDemandesAcceptees() {
        return demandeBusRepository.findByAcceptee(true);
    }

    @Override
    public List<DemandeBus> getDemandesRefusees() {
        return demandeBusRepository.findByAcceptee(false);
    }

    @Override
    public DemandeBus accepterDemandeBus(Long id) {
        DemandeBus demandeBus = demandeBusRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeBus.setAcceptee(true);
        return demandeBusRepository.save(demandeBus);
    }

    @Override
    public DemandeBus refuserDemandeBus(Long id) {
        DemandeBus demandeBus = demandeBusRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Demande non trouvée"));
        demandeBus.setAcceptee(false);
        return demandeBusRepository.save(demandeBus);
    }

    @Override
    public List<DemandeBus> listerDemandesBusParClub(String nom_org) {
        return demandeBusRepository.findByOrganisationNom(nom_org);
    }
}
