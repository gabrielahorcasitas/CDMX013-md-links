const brokenLinks = require('../lib/broken-links');
/*¿Necesito mockear axios aunque no lo llamo directamente,
sino que se encuentra implícito en validatelinks?
No, porque puedo hacer un mock data donde la petición
HTTP ya está resuelta*/

describe('Obtaining broken links', () => {
    const linkObjStatus = [{
        path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
        href: 'https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
        text: 'The Complete Guide to Status Codes for Meaningful ',
        status: 200,
        statusText: 'ok'
    },
    {
        path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
        href: 'https://github.com/Laboratoria/course-parsr',
        text: 'course-parser',
        status: 404,
        statusText: 'fail'
    }];
    test('Should return total of broken links in array', () => {
        return brokenLinks(linkObjStatus).then((response) => {
            expect(response).toBe(1);
        });
    });
    const linkObjStatusTwo = [{
        path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
        href: 'https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
        text: 'The Complete Guide to Status Codes for Meaningful ',
        status: 200,
        statusText: 'ok'
    }];
    test('Should return total of broken links in array', () => {
        return brokenLinks(linkObjStatusTwo).then((response) => {
            expect(response).toBe(0);
        });
    });
});


