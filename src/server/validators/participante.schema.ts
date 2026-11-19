import { z } from "zod";
import { esDocumentoValido, normalizarDocumento } from "@/lib/documento";

export const condicionEnum = z.enum(["Asistente", "Ponente", "Organizador"]);

const documentoSchema = z
  .string()
  .transform(normalizarDocumento)
  .refine(esDocumentoValido, {
    message: "El documento debe tener entre 6 y 15 letras o números",
  });

export const participanteSchema = z.object({
  evento_id: z.string().uuid().nullable().optional(),
  dni: documentoSchema,
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(200)
    .transform((v) => v.trim().toUpperCase()),
  condicion: condicionEnum,
  codigo: z
    .string()
    .min(5)
    .max(50)
    .regex(/^[A-Z0-9\-]+$/, { message: "Solo letras mayúsculas, números y guiones" }),
});

export const participantePatchSchema = participanteSchema.partial();

export const verificarDniSchema = z.object({
  dni: documentoSchema,
});

export type ParticipanteInput = z.infer<typeof participanteSchema>;
export type ParticipantePatchInput = z.infer<typeof participantePatchSchema>;
