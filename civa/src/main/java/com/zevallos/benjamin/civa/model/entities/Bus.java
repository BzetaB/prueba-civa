package com.zevallos.benjamin.civa.model.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bus")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBus;
    @Column(unique = true, nullable = false)
    private String numberBus;
    @Column(unique = true, nullable = false)
    private String placaBus;
    private String characteristics;
    @UpdateTimestamp
    private LocalDateTime dateCreated;
    @Column(nullable = false)
    private Boolean isActive;

    //Relacion de Uno a Muchos.
    //Un bus tiene una categoria, una categoria esta en muchos buses.
    @ManyToOne
    @JoinColumn(name = "id_marca",nullable = false)
    private Marca marca;

}
