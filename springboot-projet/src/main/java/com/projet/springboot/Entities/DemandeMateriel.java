package com.projet.springboot.Entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DemandeMateriel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String materiel;
    private Date date;
    private LocalTime temps; // horaire
    private int duree;
    private int quantite;
    private String raison;
    private Boolean etat=null;
    @ManyToOne
    private Organisation organisation;
}
