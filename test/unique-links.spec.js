const uniqueLinks = require('../lib/unique-links-stats');

describe('Obtaining non repeated links', () => {
    const linksOfMd = [
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
      
      test('Should return the number of unique links in array', () => {
        const unique = uniqueLinks(linksOfMd);
        expect(unique).toBe(3);
      });
});