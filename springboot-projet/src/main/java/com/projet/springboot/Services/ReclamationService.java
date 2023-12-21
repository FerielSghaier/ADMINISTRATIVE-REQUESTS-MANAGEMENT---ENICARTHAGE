package com.projet.springboot.Services;

import com.projet.springboot.Entities.Reclamation;

import java.util.List;
import java.util.Optional;

public interface ReclamationService {
    public Reclamation ajouterReclamation (Reclamation rec);
    public Reclamation modifierReclamation(Reclamation rec);
    public List<Reclamation> afficherReclamation();
    public Optional<Reclamation> getReclamationById(Long id);
    public void supprimerRecById(Long id);
}
