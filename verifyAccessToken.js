import { createSignature } from "./createSignature.js";
import { convertTextToObject } from "./utils.js";
import { getCurrentTimeInSeconds } from "./getCurrentTimeInSeconds.js";

// Valida el token recibido por el cliente
export const verifyAccessToken = (token) => {
    const parts = token.split(".");

    if (parts.length !== 3) {
        return { valid: false, reason: "Formato Inválido" };
    }

    // Guardar las partes del token recibido
    const headertext = parts[0];
    const payloadText = parts[1];
    const receivedSignature = parts[2];

    // Obtener la firma esperada por el servidor
    const expectedSignature = createSignature(headertext, payloadText);

    if (receivedSignature !== expectedSignature) {
        return { valid: false, reason: "Token alterado" };
    }

    const payload = convertTextToObject(payloadText);
    const currentTime = getCurrentTimeInSeconds();

    if (payload.expiresAt < currentTime) {
        return { valid: false, reason: "Token expirado" };
    }

    return {
        valid: true,
        user: payload
    };
}