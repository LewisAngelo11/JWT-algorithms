// Crear la firma del token (sello falso)

const SECRET_KEY = "clave_super_secreta_del_backend"; // Firma de prueba

export const createSignature = (headersText, payloadText) => {
    const combinedText = headersText + "." + payloadText + SECRET_KEY;
    return btoa(combinedText);
}