const getLinks = require('../lib/get-links');

describe('test get links spec',()=>{
    const files = ['/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md']
    const linksExpect =  [
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
        },
        {
          path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
          href: 'https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
          text: 'The Complete Guide to Status Codes for Meaningful '
        }
      ];

    test('Should return an array of objects for each link data(path, href and text)',()=>{
        const links = getLinks(files);
        expect(links).toEqual(linksExpect);
    });
});