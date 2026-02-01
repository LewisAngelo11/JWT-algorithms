// Obtener el tiempo actual en segundos
// Se utiliza para saber si el token ya expiró
export const getCurrentTimeInSeconds = () => {
    return Math.floor(Date.now() / 1000);
}