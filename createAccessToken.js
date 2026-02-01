import { createTokenPayload } from "./createTokenPayload.js"
import { convertObjectToText } from "./utils.js";
import { createSignature } from "./createSignature.js";

export const createAccessToken = (userId, role, expiresInSeconds) => {
    // Creamos el header del token, indicamos el tipo e indicamos como está sellado el token
    const header = {
        type: "ACCESS_TOKEN", // Que tipo de pase es
        algorithm: "FAKE" // Como está sellado
    }

    // Creamos el payload del token
    const payload = createTokenPayload(userId, role, expiresInSeconds);

    const headerText = convertObjectToText(header); // Convertir el header a texto
    const payloadText = convertObjectToText(payload) // Convertir el payload a texto
    const signatureText = createSignature(headerText, payloadText); // Crear la firma del token

    return headerText + "." + payloadText + "." + signatureText;
}