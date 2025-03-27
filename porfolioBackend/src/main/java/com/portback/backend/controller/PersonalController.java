package com.portback.backend.controller;

import com.portback.backend.model.Personal;
import com.portback.backend.repository.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal")
@CrossOrigin(origins = "*") // adjust if needed for security
public class PersonalController {

    @Autowired
    private PersonalRepository repository;

    @GetMapping
    public List<Personal> getAll() {
        return repository.findAll(); // returns all personal records
    }

    @PostMapping
    public Personal save(@RequestBody Personal p) {
        return repository.save(p);
    }
}
