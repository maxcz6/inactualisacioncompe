export function normalizarDocumento(valor: string): string {
  return valor.trim().replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}

export function esDocumentoValido(valor: string): boolean {
  return /^[A-Z0-9]{6,15}$/.test(valor);
}
