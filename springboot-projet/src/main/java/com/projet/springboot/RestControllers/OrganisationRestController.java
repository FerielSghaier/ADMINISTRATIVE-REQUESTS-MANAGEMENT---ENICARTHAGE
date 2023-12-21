package com.projet.springboot.RestControllers;

import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Repository.OrganisationRepository;
import com.projet.springboot.Services.OrganisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/organisation")
public class OrganisationRestController {
    @Autowired
    OrganisationService organisationService ;
    @RequestMapping(method = RequestMethod.POST)

    public void ajoutorganisation(@RequestBody Organisation organisation){

         organisationService.ajouterOrganisation(organisation);
    }
    @PostMapping("/organisations/{id}/confirm")
    public void confirmOrganisation(@PathVariable Long id) {
        organisationService.confirmOrganisation(id);
    }
    @RequestMapping(value= "/{id}", method=RequestMethod.PUT)
    public Organisation modifierorganisation(@PathVariable ("id") Long id, @RequestBody Organisation organisation){
        Organisation newOrganisation = organisationService.modifierOrganisation(organisation);
        return newOrganisation;
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Organisation> afficherorganisation(){
        return organisationService.afficherOrganisation();
    }
    @RequestMapping(value = "/{id}",method=RequestMethod.DELETE)
    public void supprimerorganisation(@PathVariable("id") Long id){

        organisationService.supprimerById(id);
    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Organisation> getOrganisationById(@PathVariable("id") Long id){

        Optional<Organisation> organisation = organisationService.getOrganisationById(id);
        return organisation;
    }
    @PostMapping(path = "login")
    public ResponseEntity<Map<String, Object>> loginOrganisation(@RequestBody Organisation organisation) {

        HashMap<String, Object> response = new HashMap<>();

        Organisation userFromDB = organisationRepository.findByEmail(organisation.getEmail());

        if (userFromDB == null) {
            response.put("message", "Organisation not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }  else {
            String token = Jwts.builder()
                    .claim("data", userFromDB)
                    .signWith(SignatureAlgorithm.HS256, "SECRET") //hedha el cryptage elli trod e token crypté
                    .compact();
            response.put("token", token);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
    }
    @Autowired
    private OrganisationRepository organisationRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public OrganisationRestController(OrganisationRepository organisationRepository)
    {this.organisationRepository= organisationRepository;}
    @PostMapping(path = "registerorganisation")
    public ResponseEntity<?> addOrganisation(@RequestBody Organisation organisation) {
        if(organisationRepository.existsByEmail(organisation.getEmail()))
            return new ResponseEntity<Void>(HttpStatus.FOUND);
        organisation.setMdp(this.bCryptPasswordEncoder.encode(organisation.getMdp()));
        Organisation savedUser = organisationRepository.save(organisation);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    @GetMapping("/enattente")
    public List<Organisation> getOrgEnAttente() {
        return organisationService.getOrgEnAttente();
    }
    @GetMapping("/acceptees")
    public List<Organisation> getOrgAccepees() {
        return organisationService.getOrgsAcceptees();
    }
}
