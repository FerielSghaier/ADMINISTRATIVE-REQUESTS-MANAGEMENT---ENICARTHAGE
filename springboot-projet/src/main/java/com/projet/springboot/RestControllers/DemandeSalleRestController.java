package com.projet.springboot.RestControllers;

import com.projet.springboot.Entities.*;
import com.projet.springboot.Repository.DemandeMaterielRepository;
import com.projet.springboot.Repository.DemandeSalleRepository;
import com.projet.springboot.Services.DemandeMaterielService;
import com.projet.springboot.Services.DemandeSalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/demandeSalle")
public class DemandeSalleRestController {
    @Autowired
    DemandeSalleRepository demandeSalleRepository;
    @Autowired
    DemandeSalleService demandeSalleService;
    @RequestMapping(method = RequestMethod.POST)

    public DemandeSalle ajoutdemandeSalle(@RequestBody DemandeSalleDto demandeSalleDto){
        return demandeSalleService.ajouterDemandeSalle(demandeSalleDto);

    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public DemandeSalle modifierDemandeSalle(@PathVariable("id") Long id, @RequestBody DemandeSalle demandeSalle){
        DemandeSalle newDemande = demandeSalleService.modifierDemandeSalle(demandeSalle);
        return newDemande;
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<DemandeSalle> afficherdemandeSalle(){
        return demandeSalleService.afficherDemandeSalle();
    }
    @RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
    public void supprimerdemandeSalle(@PathVariable("id") Long id){

        demandeSalleService.supprimerById(id);
    }
    @GetMapping("/enattente")
    public List<DemandeSalle> getDemandesEnAttente() {
        return demandeSalleService.getDemandesEnAttente();
    }

    @GetMapping("/acceptees")
    public List<DemandeSalle> getDemandesAcceptees() {
        return demandeSalleService.getDemandesAcceptees();
    }

    @GetMapping("/refusees")
    public List<DemandeSalle> getDemandesRefusees() {
        return demandeSalleService.getDemandesRefusees();
    }
    @PutMapping("/{id}/accepter")
    public DemandeSalle accepterDemande(@PathVariable Long id) {
        return demandeSalleService.accepterDemandeSalle(id);
    }

    @PutMapping("/{id}/refuser")
    public DemandeSalle refuserDemande(@PathVariable Long id) {
        return demandeSalleService.refuserDemandeSalle(id);
    }
    @GetMapping("/organisation/{organisationId}")
    public List<DemandeSalle> listerDemandeSalleParClub(@PathVariable Long organisationId) {
        Organisation org = new Organisation();
        org.setId(organisationId);
        return demandeSalleService.listerDemandeSalleParClub(org.getNom());
    }
}
