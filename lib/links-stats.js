const validateLinks = require('./validate-links');
const uniqueLinks = require('./unique-links-stats');

function linkStats(links){
    const httpResponse = links.map((link) => validateLinks(link));
    Promise.all(httpResponse).then((response) => {
        const nonRepeated = uniqueLinks(links);
        const totalBrokenLinks = response.filter((link) => link.statusText === 'fail').length;
        console.log(`${'Total:'.green} ${links.length}\n${'Unique:'.green} ${nonRepeated}\n${'Broken:'.magenta.bold} ${totalBrokenLinks}`);
    });
};

module.exports = linkStats;
   

