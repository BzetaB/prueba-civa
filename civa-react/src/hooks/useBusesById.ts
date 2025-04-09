import { useEffect, useState } from "react"
import { Bus } from "../schemas/BusSchema"
import { fetchBusesById } from "../api/apiBuses";

export const useBusesById = (id: number) => {
    const [bus, setBus] = useState<Bus>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchBusesById(id);
            setBus(response);
        };
        fetchData();
    }, [id]);

    return {
        bus
    };

}