package com.projet.springboot.Services;

import com.projet.springboot.Entities.Proposition;

import java.util.List;
import java.util.Optional;

public interface PropositionService {
    public Proposition ajouterProposition (Proposition prop);
    public Proposition modifierProposition(Proposition prop);
    public List<Proposition> afficherProposition();
    public Optional<Proposition> getPropositionnById(Long id);
    public void supprimerPropById(Long id);
}
