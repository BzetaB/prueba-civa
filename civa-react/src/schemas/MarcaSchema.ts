import { z } from "zod";

export const MarcaSchema = z.object({
    idMarca: z.number(),
    nameMarca: z.string()
});

export type Marca = z.infer<typeof MarcaSchema>;