package com.projet.springboot.Services;

import com.projet.springboot.EmailSenderService;
import com.projet.springboot.Entities.Organisation;
import com.projet.springboot.Repository.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrganisationServiceImpl implements OrganisationService{
    @Autowired
    OrganisationRepository organisationRepository;
    @Autowired
    private EmailSenderService senderService;

    @Override
    public void ajouterOrganisation(Organisation organisation) {
        organisationRepository.save(organisation);
        // Send email notification to admin
        String subject = "Nouveau compte";
        String body = "Un nouveau compte a été crée et attend votre approbation.\n" +
                "Nom de l'organisation: " + organisation.getNom() + "\n" +
                "Nom et prénom du responsable: " + organisation.getPrenomResp() + " " + organisation.getNomResp() + "\n" +
                "Email: " + organisation.getEmail();

        senderService.sendSimpleEmail("feriel.sghaier@enicar.ucar.tn", subject,body );

    }

    @Override
    public void confirmOrganisation(Long id) {
        // Retrieve user from temporary table
        Optional<Organisation> optionalOrganisation = organisationRepository.findById(id);
        if (optionalOrganisation.isPresent()) {
            Organisation organisation = optionalOrganisation.get();

            // Move org to final table
            organisationRepository.delete(organisation);
            organisation.setEtat(true);
            if (organisation.getLogo().isEmpty()){
                //idha el entreprise ki jet ta3ml upload mahabitch thott image inhottou haja par deafaut
                organisation.setLogo("http:localhost:4200/assets/img/company_logo_2.png");
            }
            else {
                organisation.setLogo(organisation.getLogo());
            }
            organisationRepository.save(organisation);

            // Send email confirmation to user
            String subject = "Your account has been approved";
            String body = "Congratulations! Your account has been approved by the admin.";
            senderService.sendSimpleEmail(organisation.getEmail(), subject,body );
        }

    }


    @Override
    public Organisation modifierOrganisation(Organisation organisation) {
        return organisationRepository.save(organisation);
    }

    @Override
    public List<Organisation> afficherOrganisation() {
        return organisationRepository.findAll();
    }

    @Override
    public void supprimerById(Long id) {
        organisationRepository.deleteById(id);
    }
    @Override
    public List<Organisation> getOrgEnAttente() {
        return organisationRepository.findByEtat(false);
    }

    @Override
    public List<Organisation> getOrgsAcceptees() {
        return organisationRepository.findByEtat(true);
    }
    @Override
    public Optional<Organisation> getOrganisationById(Long id) {
        return organisationRepository.findById(id);
    }
}
