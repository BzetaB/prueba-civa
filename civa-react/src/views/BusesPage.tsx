import Table from "../components/Table";
import { Bus } from "../schemas/BusSchema";
import { BusColumns } from "../config/BusColumns";
import { useBuses } from "../hooks/useBuses";
import { Link } from "react-router";

const BusesPage = () => {

    const { buses } = useBuses();

    return (
        <div className="p-4">
            <Link to="/" className="text-primary font-black hover:underline mb-4 inline-block text-xl">
                Inicio
            </Link>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-primary">Listado de Buses</h1>
            </div>
            <Table<Bus>
                data={buses}
                columns={BusColumns} 
                idField="idBus"/>
        </div>
    )
}
export default BusesPage;