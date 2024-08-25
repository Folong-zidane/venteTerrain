package com.example.API.controller;

import com.example.API.model.Maison;
import com.example.API.service.MaisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/maisons")
public class MaisonController {

    @Autowired
    private MaisonService maisonService;

    @GetMapping
    public List<Maison> getAllMaisons() {
        return maisonService.getAllMaisons();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Maison> getMaisonById(@PathVariable Long id) {
        Optional<Maison> maison = maisonService.getMaisonById(id);
        return maison.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Maison createMaison(@RequestBody Maison maison) {
        return maisonService.saveMaison(maison);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Maison> updateMaison(@PathVariable Long id, @RequestBody Maison maisonDetails) {
        Optional<Maison> updatedMaison = maisonService.updateMaison(id, maisonDetails);
        return updatedMaison.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
public ResponseEntity<Void> deleteMaison(@PathVariable Long id) {
    boolean isDeleted = maisonService.deleteMaison(id);
    if (isDeleted) {
        return ResponseEntity.noContent().build();
    } else {
        return ResponseEntity.notFound().build();
    }
}

}