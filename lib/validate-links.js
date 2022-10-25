const axios = require('axios'); //in documentation uses .default pero no me funcionaba así

// //axios -> mockup interceptar peticiones y devovler 200
// //axios mockup siempre devuelve resultado 200
// const axios = {
//     get: function (){
//         return Promise.resolve({status: 200})
//     }
// }

console.log(axios.get('prueba'))

function validateLinks(linkObj){
    const request =  axios.get(linkObj.href);
       return request //retorna arreglo de promesas (promesa por c/ validación de link)
        .then((response) => { //cada then retorna una promesa por resolver
            const validatedLinkObj = {
                ...linkObj, 
                status: response.status,
                statusText: 'ok'
            };
         return validatedLinkObj;
        })
        .catch((error) => {
            if(error.response){
                const validatedLinkObj = {
                    ...linkObj, 
                    status: error.response.status,
                    statusText: 'fail'
                };
            return validatedLinkObj;
            } else {
            const validatedLinkObj = {//for the case of links that take you to other parts of the same document/page
                ...linkObj,
                status: `Error ${error.message}`,
                statusText: 'fail',
              };
              return validatedLinkObj;
            };
        });
};

module.exports = validateLinks;