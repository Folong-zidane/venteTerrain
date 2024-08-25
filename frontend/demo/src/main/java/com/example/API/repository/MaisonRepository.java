package com.example.API.repository;


import com.example.API.model.Maison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaisonRepository extends JpaRepository<Maison, Long> {
    // Vous pouvez ajouter des méthodes de recherche personnalisées ici si nécessaire
}