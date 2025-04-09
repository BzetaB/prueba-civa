import { Bus } from "../schemas/BusSchema";

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const fetchBuses = async ():Promise<Bus[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/bus`);

        if(!response.ok){
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Buses data:", data); // Log the buses data
        return data;
    } catch(error){
        console.error("Error fetching buses:", error);
        throw error;
    }
};

export const fetchBusesById = async (id: number):Promise<Bus> => {
    try{
        const reponse = await fetch(`${API_BASE_URL}/bus/${id}`);

        if(!reponse.ok){
            throw new Error(`Error: ${reponse.status} ${reponse.statusText}`);
        }

        const data = await reponse.json();
        console.log("Bus data:", data); // Log the bus data
        return data;
    }catch(error){
        console.error(`Error fetching buses with id ${id}:`, error);
        throw error;
    }
}