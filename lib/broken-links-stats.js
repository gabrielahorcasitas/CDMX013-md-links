const validateLinks = require('./validate-links');

const arrExample = [
    {
      path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
      href: 'https://docs.npmjs.com/cli/install',
      text: 'docs oficiales de npm install acá'
    },
    {
      path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
      href: 'https://github.com/Laboratoria/course-parsr',
      text: 'course-parser'
    },
    {
      path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
      href: 'https://github.com/Laboratoria/course-parsr',
      text: 'course-parser'
    }
  ]
  
function brokenLinks(links){
    const httpResponse = links.map((link) => validateLinks(link));
    Promise.all(httpResponse).then((response) => {
        const totalBrokenLinks = response.filter((link) => link.statusText === 'fail');
        console.log(totalBrokenLinks);
        return totalBrokenLinks;
    });
};

brokenLinks(arrExample);
module.exports = brokenLinks;
   

