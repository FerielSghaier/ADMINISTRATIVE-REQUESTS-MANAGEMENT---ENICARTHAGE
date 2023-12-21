package com.projet.springboot.Services;

import com.projet.springboot.Entities.Proposition;
import com.projet.springboot.Repository.PropositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropositionServiceImpl implements PropositionService{
    @Autowired
    PropositionRepository propRepo ;
    @Override
    public Proposition ajouterProposition (Proposition prop) {
        return propRepo.save(prop);
    }
    @Override
    public Proposition modifierProposition(Proposition prop) {
        return propRepo.save( prop);

    }
    @Override
    public List<Proposition> afficherProposition(){
        return (List<Proposition>) propRepo.findAll();


    }
    public Optional <Proposition>getPropositionnById(Long id){
        return propRepo.findById(id);

    }
    public void supprimerPropById(Long id) {
        propRepo.deleteById(id);

    }
}
