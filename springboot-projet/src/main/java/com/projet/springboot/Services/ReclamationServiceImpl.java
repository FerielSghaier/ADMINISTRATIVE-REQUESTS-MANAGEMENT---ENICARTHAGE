package com.projet.springboot.Services;

import com.projet.springboot.Entities.Reclamation;
import com.projet.springboot.Repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReclamationServiceImpl implements ReclamationService{
    @Autowired
    ReclamationRepository recRepo ;
    @Override
    public Reclamation ajouterReclamation (Reclamation rec) {
        return recRepo.save(rec);
    }
    @Override
    public Reclamation modifierReclamation(Reclamation rec) {
        return recRepo.save(rec);

    }
    @Override
    public List<Reclamation> afficherReclamation(){
        return (List<Reclamation>) recRepo.findAll();

    }
    public Optional<Reclamation> getReclamationById(Long id){
        return recRepo.findById(id);

    }
    public void supprimerRecById(Long id) {
        recRepo.deleteById(id);

    }
}
