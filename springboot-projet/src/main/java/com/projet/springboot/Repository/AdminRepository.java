package com.projet.springboot.Repository;

import com.projet.springboot.Entities.Admin;
import com.projet.springboot.Entities.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Admin findByEmail(String email);
    Boolean existsByEmail(String email);
}
