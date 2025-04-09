package com.zevallos.benjamin.civa.service.imp;

import com.zevallos.benjamin.civa.model.entities.Bus;
import com.zevallos.benjamin.civa.repository.BusRepository;
import com.zevallos.benjamin.civa.service.BusService;
import com.zevallos.benjamin.civa.utils.exception.custom.DataNotFound;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusServiceImp implements BusService {

    private final BusRepository busRepository;

    public BusServiceImp(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @Override
    public List<Bus> listBuses() {
        return busRepository.findAll();
    }

    @Override
    public Bus findBusById(Long id) {
        return busRepository.findById(id).orElseThrow(
                () -> new DataNotFound("No se encontro el bus con el id: " + id )
        );
    }
}
