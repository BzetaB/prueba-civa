USE sys;
CREATE database civa;
USE civa;

CREATE TABLE marca(
    id_marca BIGINT PRIMARY KEY AUTO_INCREMENT,
    name_marca VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE bus(
    id_bus BIGINT PRIMARY KEY AUTO_INCREMENT,
    number_bus VARCHAR(10) UNIQUE NOT NULL,
    placa_bus VARCHAR(7) UNIQUE NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    characteristics VARCHAR(200),
    is_active BOOLEAN NOT NULL,
    id_marca BIGINT NOT NULL,
    CONSTRAINT fk_marca FOREIGN KEY (id_marca) REFERENCES marca(id_marca)
);

INSERT INTO marca(name_marca)
VALUES
    ('Volvo'),('Scania'),('Fiat'),('Mercedes');

INSERT INTO bus(number_bus, placa_bus, characteristics, is_active, id_marca)
VALUES
    ("101", "ABC-101", "Bus ExcluCiva - 2 niveles", 1, 4),
    ("102", "DEF-102", "Bus SuperCiva - 2 niveles", 1, 1),
    ("103", "GHI-103", "Bus EconoCiva - 1 nivel", 1, 2),
    ("104", "JKL-104", "Bus Civa Cargo - Encomiendas", 1, 3),
    ("105", "JKL-105", "Bus Civa Cargo - Encomiendas", 1, 5),
    ("106", "JKL-106", "Bus ExcluCiva - 2 niveles", 1, 6),
    ("107", "JKL-107", "Bus SuperCiva - 2 niveles", 1, 1),
    ("108", "JKL-108", "Bus EconoCiva - 1 niveles", 0, 2),
    ("109", "JKL-109", "Bus ExcluCiva - 2 niveles", 0, 3),
    ("110", "JKL-110", "Bus Civa Cargo - Encomiendas", 1, 4);