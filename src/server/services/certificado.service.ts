import "server-only";
import * as repo from "@/server/repositories/participante.repository";
import { esDocumentoValido, normalizarDocumento } from "@/lib/documento";
import type { CertificadoPublico } from "@/types/participante";

/**
 * Servicio de BACKEND para Certificados.
 * Contiene reglas de negocio y delega consultas al repository.
 * Marcado con "server-only" para no ejecutarse en cliente.
 */

export async function consultarPorDni(dni: string): Promise<CertificadoPublico[]> {
  const documento = normalizarDocumento(dni);
  if (!esDocumentoValido(documento)) {
    throw new Error("Documento inválido: debe tener entre 6 y 15 letras o números");
  }
  return repo.findByDni(documento);
}

export async function consultarPorCodigo(codigo: string): Promise<CertificadoPublico | null> {
  const codigoLimpio = codigo.trim().toUpperCase();
  return repo.findByCodigo(codigoLimpio);
}
