import { Link, useParams } from "react-router";
import { useBusesById } from "../hooks/useBusesById"


export const BusByIdPage = () => {

    const { id } = useParams<{ id: string }>();
    const { bus } = useBusesById(Number(id));

    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full bg-black flex flex-col justify-start items-start p-12 gap-10">
                <Link to="/bus" className="text-white font-black hover:underline mb-4 inline-block">
                    Volver a la lista
                </Link>
                <h2 className="text-secondary text-4xl font-extrabold">
                    Detalles del Bus:
                </h2>
                <div className="bg-primary shadow rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                        <div>
                            <h2 className="font-semibold">ID: {bus?.idBus}</h2>
                        </div>
                        <div>
                            <h2 className="font-semibold">Número de Bus: {bus?.numberBus}</h2>
                        </div>
                        <div>
                            <h2 className="font-semibold">Placa:</h2>
                            <p>{bus?.placaBus}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Marca:</h2>
                            <p>{bus?.marca.nameMarca}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Características:</h2>
                            <p>{bus?.characteristics}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Fecha de Creación:</h2>
                            <p>{bus?.dateCreated ? new Date(bus.dateCreated).toLocaleDateString() : "Fecha no disponible"}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Estado:</h2>
                            <p>{bus?.isActive ? "Activo" : "Inactivo"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <img src="https://atocongo.com.pe/wp-content/uploads/2024/06/CIVA-BUS.png" alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}