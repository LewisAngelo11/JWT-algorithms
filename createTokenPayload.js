import { getCurrentTimeInSeconds } from "./getCurrentTimeInSeconds.js"

// Crea el contenido del token (Payload)
export const createTokenPayload = (userId, role, secondsUntilExpiration) => {
    const currentTime = getCurrentTimeInSeconds(); // Obtener la tiempo actual en segundos

    // Retornar el payload
    return {
        userId: userId,
        role: role,
        expiresAt: currentTime + secondsUntilExpiration,
    };
}