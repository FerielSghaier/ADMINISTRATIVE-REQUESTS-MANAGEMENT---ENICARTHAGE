package com.projet.springboot.Entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;
import java.util.Timer;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DemandeSalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numSalle;
    private String batiment; // annexe ou principal
    private Date date;
    private LocalTime temps; // horaire
    private int duree;
    private String raison;
    private Boolean etat=null;
    @ManyToOne
    private Organisation organisation;

}
