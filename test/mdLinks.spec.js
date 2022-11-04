const mdLinks = require('../lib/mdLinks');

describe('Should return (when promise resolved/rejected) info about links in md file', () => {
    const dirPath = 'example/exampletwo/examplethree/exampleseven'
    const linkPath = 'example/exampletwo/examplefour.md';
    const validateOne = true;
    const statsOne = true;
    const validateTwo = false;
    const statsTwo = false;

    test('Should iterate until finding md file and obtain array of objects with info of each link if introduced a directory path', () => {
       const linkObj = [
        {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree/exampleseven/exampleeight/examplenine.md',
            href: 'https://github.com/workshopper/learnyounode',
            text: 'learnyounode'
        },
        {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree/exampleseven/exampleeight/examplenine.md',
            href: 'https://github.com/workshopper/how-to-npm',
            text: 'how-to-npm'
        },
        {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree/exampleseven/exampleeight/examplenine.md',
            href: 'https://github.com/stevekane/promise-it-wont-hurt',
            text: 'promise-it-wont-hurt'
        }
       ];
          return mdLinks(dirPath, validateTwo, statsTwo).then ((result) => {
            expect(result).toEqual(linkObj);
        });
    })

    test('Should return an array of objects with general info of each link if options !validate && !stats', () => {
        const linkObj = [
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
        return mdLinks(linkPath, validateTwo, statsTwo).then ((result) => {
            expect(result).toEqual(linkObj);
        });
    });

    test('Should return an array of objects with general info of each link if options !validate && stats', () => {
        const linkObj = [
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
        return mdLinks(linkPath, validateTwo, statsOne).then ((result) => {
            expect(result).toEqual(linkObj);
        });
    });

    test('Should return an array of objects with http status if validate && !stats', () => {
        const linkObjStatus = [{
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://docs.npmjs.com/cli/install',
            text: 'docs oficiales de npm install acá',
            status: 200,
            statusText: 'ok'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser',
            status: 404,
            statusText: 'fail'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser',
            status: 404,
            statusText: 'fail'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
            text: 'The Complete Guide to Status Codes for Meaningful ',
            status: 200,
            statusText: 'ok'
          }
        ];
        return mdLinks(linkPath, validateOne, statsTwo).then ((result) => {
            expect(result).toEqual(linkObjStatus);
        });
    });

    test('Should return an array of objects with http status if validate && stats', () => {
        const linkObjStatus = [{
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://docs.npmjs.com/cli/install',
            text: 'docs oficiales de npm install acá',
            status: 200,
            statusText: 'ok'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser',
            status: 404,
            statusText: 'fail'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser',
            status: 404,
            statusText: 'fail'
          },
          {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
            text: 'The Complete Guide to Status Codes for Meaningful ',
            status: 200,
            statusText: 'ok'
          }
        ];
        return mdLinks(linkPath, validateOne, statsOne).then((result) => {
            expect(result).toEqual(linkObjStatus);
        });
    });
});


