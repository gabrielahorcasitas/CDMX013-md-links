const validateLinks = require('./validate-links');

function brokenLinks(links){
    const httpResponse = links.map((link) => validateLinks(link));
    return Promise.all(httpResponse)
    .then((response) => {
        const totalBrokenLinks = response.filter((link) => link.statusText === 'fail').length;
        return totalBrokenLinks
    });
};

module.exports = brokenLinks;
   

