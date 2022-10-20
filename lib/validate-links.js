const axios = require('axios'); //in documentation uses .default pero no me funcionaba así

function validateLinks(linkObj){
    const request =  axios.get(linkObj.href);
       return request //retorna arreglo de promesas (promesa por c/ validación de link)
        .then((response) => { //cada then retorna una promesa por resolver
            const validatedLinkObj = {
                ...linkObj, 
                status: response.status,
                statusText: 'ok'
            };
        console.log(validatedLinkObj);
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
                const validatedLinkObj = {
                    ...linkObj,
                    status: `Error ${error.message}`,
                    statusText: 'fail'
              };
               return validatedLinkObj;
            }
        });
};

module.exports = validateLinks;