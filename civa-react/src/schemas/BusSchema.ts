import { z } from "zod";
import { MarcaSchema } from "./MarcaSchema";

export const BusSchema = z.object({
    idBus: z.number(),
    numberBus: z.number(),
    placaBus: z.string(),
    characteristics: z.string(),
    dateCreated: z.coerce.date(),
    isActive: z.boolean(),
    marca: MarcaSchema
});

export type Bus = z.infer<typeof BusSchema>;