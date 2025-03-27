package com.portback.backend.repository;

import com.portback.backend.model.Personal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonalRepository extends MongoRepository<Personal, String> {
}
