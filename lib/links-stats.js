const validateLinks = require('./validate-links');
const uniqueLinks = require('./unique-links-stats');

function linkStats(links){
    const httpResponse = links.map((link) => validateLinks(link));
    Promise.all(httpResponse).then((response) => {
        const nonRepeated = uniqueLinks(links);
        const totalBrokenLinks = response.filter((link) => link.statusText === 'fail').length;
        console.log(`${'Total:'.blue.bold} ${links.length}`,`\n${'Unique:'.blue.bold} ${nonRepeated}`,`\n${'Broken:'.red.bold} ${totalBrokenLinks}\n`);
    });
};

module.exports = linkStats;
   

