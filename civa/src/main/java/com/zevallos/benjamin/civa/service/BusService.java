package com.zevallos.benjamin.civa.service;

import com.zevallos.benjamin.civa.model.entities.Bus;

import java.util.List;

public interface BusService {
    List<Bus> listBuses();
    Bus findBusById(Long id);
}
