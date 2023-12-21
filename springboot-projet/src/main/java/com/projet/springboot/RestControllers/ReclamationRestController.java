package com.projet.springboot.RestControllers;

import com.projet.springboot.Entities.Reclamation;
import com.projet.springboot.Services.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/reclamation")
public class ReclamationRestController {
    @Autowired
    ReclamationService recService ;
    @RequestMapping(method = RequestMethod.POST)
    public Reclamation ajouterProposition(@RequestBody Reclamation reclamation){
        return recService.ajouterReclamation(reclamation);

    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public  Reclamation modifierReclamation(@PathVariable("id") Long id, @RequestBody Reclamation reclamation){
        Reclamation recs = recService.modifierReclamation(reclamation);
        return recs;
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Reclamation> afficherReclamation(){
        return recService.afficherReclamation();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Reclamation> getReclamationById(@PathVariable("id") Long id){
        return recService.getReclamationById(id);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void supprimerRecById(@PathVariable("id") Long id ){
        recService.supprimerRecById(id);
    }

}
