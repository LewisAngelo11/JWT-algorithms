// El token no guarda objetos, sino texto
// Por eso se necesita converir el objeto a texto antes de crear el token

// Convertir objetos a texto con btoa
export const convertObjectToText = (object) => {
    return btoa(JSON.stringify(object));
}

// Convertir texto a objetos con atob
export const convertTextToObject = (text) => {
    return JSON.parse(atob(text));
}