import { Card } from "../components/Card"
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Link to="/bus">
                <Card
                    title="Listado de Buses"
                    description="Visualiza la lista y consulta los buses por ID" 
                    img="https://atocongo.com.pe/wp-content/uploads/2024/06/CIVA-BUS.png" />
            </Link>
        </div>
    )
}