# JWT Desde Cero (Puro JavaScript)

Este repositorio es una implementación educativa del ciclo de vida de un **Access Token tipo JWT**, escrita 100% en JavaScript puro, sin librerías externas.

El objetivo NO es seguridad en producción, sino entender a nivel algoritmo cómo funciona un JWT:
- cómo se construye
- cómo expira
- cómo se valida
- por qué devuelve `401`

---

## Objetivo del proyecto

Comprender el funcionamiento interno de un JWT sin depender de frameworks o librerías como:
- jsonwebtoken
- passport
- auth0

Este proyecto simula:
- creación de un token
- estructura `HEADER.PAYLOAD.SIGNATURE`
- expiración basada en tiempo
- validación de firma
- validación de expiración

---

## Advertencia importante

**Este proyecto NO es seguro para producción**.

- No usa criptografía real
- Usa `btoa` / `atob` solo para codificación Base64
- La firma es simulada

Su propósito es educativo y conceptual.

---

## Como ejecutarlo
- En nuestra terminal, escribimos el comando `node main.js`.


## Ejemplo de uso

```js
const token = createAccessToken(1, "admin", 5);

console.log(verifyAccessToken(token));
// Token válido

setTimeout(() => {
  console.log(verifyAccessToken(token));
  // Token expirado
}, 6000);
