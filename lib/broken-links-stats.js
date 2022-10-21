const validateLinks = require('./validate-links');

function brokenLinks(links){
    const httpResponse = links.map((link) => validateLinks(link));
    Promise.all(httpResponse).then((response) => {
       // console.log(response);
        const totalBrokenLinks = response.filter((link) => link.statusText === 'fail').length;
        console.log(totalBrokenLinks);
        return totalBrokenLinks;
    });   
};

module.exports = brokenLinks;
   

