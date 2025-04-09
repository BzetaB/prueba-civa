import { useEffect, useState } from "react";
import { Bus } from "../schemas/BusSchema";
import { fetchBuses } from "../api/apiBuses";

interface UsesBusesResult {
    buses: Bus[];
}

export const useBuses = (): UsesBusesResult => {
    const [buses, setBuses] = useState<Bus[]>([]);

    const fetchData = async () => {
            const data = await fetchBuses();
            setBuses(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return {
        buses
    };
}