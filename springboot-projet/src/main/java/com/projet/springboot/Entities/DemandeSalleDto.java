package com.projet.springboot.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ManyToOne;
import java.time.LocalTime;
import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class DemandeSalleDto {
    private Long id;
    private int numSalle;
    private String batiment; // annexe ou principal
    private Date date;
    private LocalTime temps; // horaire
    private int duree;
    private String raison;
    private Boolean etat=null;
    private Long id_org;
    private String nom_org;

}
