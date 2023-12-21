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
public class DemandeBusDto {
    private Long id;
    private String destination;
    private Date dateDep; // date de départ
    private Date dateArr; // date d'arrivée
    private LocalTime heureDep; // heure de départ
    private LocalTime heureArr; // heure d'arrivée
    private String raison;
    private Boolean acceptee=null;
    private Long id_org;
    private String nom_org;
}
