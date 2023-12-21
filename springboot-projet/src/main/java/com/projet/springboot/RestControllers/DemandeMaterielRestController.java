package com.projet.springboot.RestControllers;

import com.projet.springboot.Entities.*;
import com.projet.springboot.Repository.DemandeMaterielRepository;
import com.projet.springboot.Services.DemandeMaterielService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/demandeMateriel")
public class DemandeMaterielRestController {
    @Autowired
    DemandeMaterielRepository demandeMaterielRepository;
    @Autowired
    DemandeMaterielService demandeMaterielService;
    @RequestMapping(method = RequestMethod.POST)

    public DemandeMateriel ajoutdemandeMateriel(@RequestBody DemandeMaterielDto demandeMaterielDto){
        return demandeMaterielService.ajouterDemandeMateriel(demandeMaterielDto);

    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public DemandeMateriel modifierDemandeMateriel(@PathVariable("id") Long id, @RequestBody DemandeMateriel demandeMateriel){
        DemandeMateriel newDemande = demandeMaterielService.modifierDemandeMateriel(demandeMateriel);
        return newDemande;
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<DemandeMateriel> afficherdemandeMateriel(){
        return demandeMaterielService.afficherDemandeMateriel();
    }
    @RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
    public void supprimerdemandeMateriel(@PathVariable("id") Long id){

        demandeMaterielService.supprimerById(id);
    }
    @GetMapping("/enattente")
    public List<DemandeMateriel> getDemandesEnAttente() {
        return demandeMaterielService.getDemandesEnAttente();
    }

    @GetMapping("/acceptees")
    public List<DemandeMateriel> getDemandesAcceptees() {
        return demandeMaterielService.getDemandesAcceptees();
    }

    @GetMapping("/refusees")
    public List<DemandeMateriel> getDemandesRefusees() {
        return demandeMaterielService.getDemandesRefusees();
    }
    @PutMapping("/{id}/accepter")
    public DemandeMateriel accepterDemande(@PathVariable Long id) {
        return demandeMaterielService.accepterDemandeMateriel(id);
    }

    @PutMapping("/{id}/refuser")
    public DemandeMateriel refuserDemande(@PathVariable Long id) {
        return demandeMaterielService.refuserDemandeMateriel(id);
    }
    @GetMapping("/organisation/{organisationId}")
    public List<DemandeMateriel> listerDemandesMaterielParClub(@PathVariable Long organisationId) {
        Organisation org = new Organisation();
        org.setId(organisationId);
        return demandeMaterielService.listerDemandesMaterielParClub(org.getNom());
    }
}
