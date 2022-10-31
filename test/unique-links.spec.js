const uniqueLinks = require('../lib/unique-links-stats');

describe('Obtaining non repeated links', () => {
    const linksOfMdOne = [
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
      const linksOfMdTwo = [
        {
          path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
          href: 'https://docs.npmjs.com/cli/install',
          text: 'docs oficiales de npm install acá'
        },
        {
          path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
          href: 'https://docs.npmjs.com/cli/install',
          text: 'docs oficiales de npm install acá'
        },
        {
          path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
          href: 'https://docs.npmjs.com/cli/install',
          text: 'docs oficiales de npm install acá'
        }
      ];
      
      test('Should return the number of unique links in array', () => {
        const unique = uniqueLinks(linksOfMdOne);
        expect(unique).toBe(3);
      });
      test('Should return 1 if there are only repeated links in array', () => {
        const unique = uniqueLinks(linksOfMdTwo);
        expect(unique).toBe(1);
      });
});