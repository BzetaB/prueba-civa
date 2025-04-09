import { Bus } from "../schemas/BusSchema"
import { Column } from "../components/Table";

export const BusColumns:Column<Bus>[] = [
    {encabezado: "ID", atributo: "idBus"},
    {encabezado: "Nro. Bus", atributo: "numberBus"},
    {encabezado: "Placa", atributo: "placaBus"},
    {encabezado: "Caracteristicas", atributo: "characteristics"},
    {encabezado: "Fecha de Creacion", atributo: "dateCreated"},
    {encabezado: "Marca", atributo: "marca", render: (bus : Bus) => bus.marca.nameMarca},
    {encabezado: "Activo", atributo: "isActive", render:(bus: Bus) => (bus.isActive ? "Si" : "No")}
];