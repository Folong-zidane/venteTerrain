package com.example.API.service;


import com.example.API.model.Maison;
import com.example.API.repository.MaisonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaisonService {

    @Autowired
    private MaisonRepository maisonRepository;

    public List<Maison> getAllMaisons() {
        return maisonRepository.findAll();
    }

    public Optional<Maison> getMaisonById(Long id) {
        return maisonRepository.findById(id);
    }

    public Maison saveMaison(Maison maison) {
        return maisonRepository.save(maison);
    }

    public Optional<Maison> updateMaison(Long id, Maison maisonDetails) {
        return maisonRepository.findById(id).map(maison -> {
            maison.setAdresse(maisonDetails.getAdresse());
            //maison.setCh
            return maisonRepository.save(maison);
        });
    }
    public boolean DeleteMaison(Long id) {
        maisonRepository.deleteById(id);
        return!maisonRepository.existsById(id);
    }
}