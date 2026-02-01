// APP PRINCIPAL

import { createAccessToken } from "./createAccessToken.js";
import { verifyAccessToken } from "./verifyAccessToken.js";

const token = createAccessToken(1, "admin", 5);

console.log("TOKEN CREADO:", token);
console.log("CHECK INICIAL:", verifyAccessToken(token));

setTimeout(() => {
    console.log("CHECK DESPUÉS:", verifyAccessToken(token));
}, 6000);
