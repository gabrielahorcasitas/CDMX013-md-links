const axios = require('axios').default;
//axios.get --> then check status '200 ok'
// ---> catch err ---> status 'fail'

function validateLinks(linkObj){
        return axios.get(linkObj.href)
        .then((response => {
            const validatedLinkObj = {
                ...linkObj, 
                status: response.status,
                statusText: 'ok'
            };
            return validatedLinkObj;
        }))
        .catch((error => {
            if(error.response){
                const validatedLinkObj = {
                    ...linkObj, 
                    status: error.response.status,
                    statusText: 'fail'
                };
            return validatedLinkObj;
            }
            //to handler of error---> reject
            const validatedLinkObj = {
                ...linkObj,
                status: `Error ${err.message}`,
                statusText: 'fail'
              };
            return validatedLinkObj;
        }));
   
};

module.exports = validateLinks;