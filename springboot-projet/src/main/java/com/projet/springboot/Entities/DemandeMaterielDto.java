package com.projet.springboot.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DemandeMaterielDto {
    private Long id;
    private String materiel;
    private Date date;
    private LocalTime temps; // horaire
    private int duree;
    private int quantite;
    private String raison;
    private Boolean etat=false;
    private Long id_org;
    private String nom_org;
}
