package com.projet.springboot.RestControllers;

import com.projet.springboot.Entities.Admin;
import com.projet.springboot.Entities.DemandeBus;
import com.projet.springboot.Entities.DemandeBusDto;
import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Repository.DemandeBusRepository;
import com.projet.springboot.Repository.OrganisationRepository;
import com.projet.springboot.Services.AdminService;
import com.projet.springboot.Services.DemandeBusService;
import com.projet.springboot.Services.OrganisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/demandeBus")
public class DemandeBusRestController {
    @Autowired
    DemandeBusService demandeBusService ;
    @Autowired
    private DemandeBusRepository demandeBusRepository;
    @Autowired
    private OrganisationRepository organisationRepository;
    @RequestMapping(method = RequestMethod.POST)

    public DemandeBus ajoutdemandeBus(@RequestBody DemandeBusDto demandeBusDto){
        return demandeBusService.ajouterDemandeBus(demandeBusDto);

    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public DemandeBus modifierDemandeBus(@PathVariable("id") Long id, @RequestBody DemandeBus demandeBus){
        DemandeBus newDemande = demandeBusService.modifierDemandeBus(demandeBus);
        return newDemande;
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<DemandeBus> afficherdemandeBus(){
        return demandeBusService.afficherDemandeBus();
    }
    @RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
    public void supprimerdemandeBus(@PathVariable("id") Long id){

        demandeBusService.supprimerById(id);
    }
    @GetMapping("/enattente")
    public List<DemandeBus> getDemandesEnAttente() {
        return demandeBusService.getDemandesEnAttente();
    }

    @GetMapping("/acceptees")
    public List<DemandeBus> getDemandesAcceptees() {
        return demandeBusService.getDemandesAcceptees();
    }

    @GetMapping("/refusees")
    public List<DemandeBus> getDemandesRefusees() {
        return demandeBusService.getDemandesRefusees();
    }
    @PutMapping("/{id}/accepter")
    public DemandeBus accepterDemande(@PathVariable Long id) {
        return demandeBusService.accepterDemandeBus(id);
    }

    @PutMapping("/{id}/refuser")
    public DemandeBus refuserDemande(@PathVariable Long id) {
        return demandeBusService.refuserDemandeBus(id);
    }
    @GetMapping("/organisation/{organisationId}")
    public List<DemandeBus> listerDemandesBusParClub(@PathVariable Long organisationId) {
        Organisation org = new Organisation();
        org.setId(organisationId);
        return demandeBusService.listerDemandesBusParClub(org.getNom());
    }

}
