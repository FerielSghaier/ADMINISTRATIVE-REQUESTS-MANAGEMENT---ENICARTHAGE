package com.projet.springboot.Services;

import com.projet.springboot.Entities.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin ajouterAdmin (Admin admin);
    Admin modifierAdmin(Admin admin);
    // je vais afficher la liste des Organisations dans une liste
    List<Admin> afficherAdmin();
    void supprimerById(Long id);
    //
    Optional<Admin> getAdminById(Long id);
}
