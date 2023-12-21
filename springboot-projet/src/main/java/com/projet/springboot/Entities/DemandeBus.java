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
public class DemandeBus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String destination;
    private Date dateDep; // date de départ
    private Date dateArr; // date d'arrivée
    private LocalTime heureDep; // heure de dépa rt
    private LocalTime heureArr; // heure d'arrivée
    private String raison;
    private Boolean acceptee=null; // si acceptee = null => demande en attente
                                   // si acceptee = false => demande refusée
                                   // si acceptee = true => demande acceptée
    @ManyToOne
    private Organisation organisation;
}
