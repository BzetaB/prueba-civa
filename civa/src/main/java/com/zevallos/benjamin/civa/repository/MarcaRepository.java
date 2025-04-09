package com.zevallos.benjamin.civa.repository;

import com.zevallos.benjamin.civa.model.entities.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {
}
