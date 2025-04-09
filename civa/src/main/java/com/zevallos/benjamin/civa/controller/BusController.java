package com.zevallos.benjamin.civa.controller;

import com.zevallos.benjamin.civa.model.entities.Bus;
import com.zevallos.benjamin.civa.service.BusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bus")
public class BusController {

    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    //Tomando el mapping del controlador
    @GetMapping("")
    public ResponseEntity<List<Bus>> listBuses(){
        return ResponseEntity.ok(busService.listBuses());
    }

    //Pasando el id como @PathVariable
    @GetMapping("/{id}")
    public ResponseEntity<Bus> busById(@PathVariable("id") Long id){
        return ResponseEntity.ok(busService.findBusById(id));
    }

}
