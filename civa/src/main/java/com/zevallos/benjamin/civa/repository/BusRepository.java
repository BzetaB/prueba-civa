package com.zevallos.benjamin.civa.repository;

import com.zevallos.benjamin.civa.model.entities.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
}
