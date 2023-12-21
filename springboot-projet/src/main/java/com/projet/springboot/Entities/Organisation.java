package com.projet.springboot.Entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "organisations") // table virtuelle pour stoquer les nouveaux comptes non confirmés
public class Organisation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String type; // club ou association
    @Lob
    private String logo;
    private String description;
    private Long tel;
    private String email;
    private String mdp;
    private String nomResp; // nom du vis à vis de l'organisation (responsable)
    private String prenomResp; // prénom du vis à vis de l'organisation (responsable)
    private Boolean etat=false;
    ;@OneToMany(mappedBy = "organisation")
    private List<DemandeBus> demandesBus;
    @OneToMany(mappedBy = "organisation")
    private List<DemandeMateriel> demandesMateriel;
    @OneToMany(mappedBy = "organisation")
    private List<DemandeSalle> demandesSalle;
}
