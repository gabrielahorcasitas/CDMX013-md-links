const validateLinks = require('../lib/validate-links');
const axios = require('axios');
jest.mock('axios');

describe('Should return object that includes HTTP status for each link', () => {
    test('Should return object with HTTP status 200 ok for valid link', () => {
        const link = 'https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5';
        const linkObj = {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
            text: 'The Complete Guide to Status Codes for Meaningful '
        };
        const linkObjStatus = {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://dev.to/_staticvoid/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
            text: 'The Complete Guide to Status Codes for Meaningful ',
            status: 200,
            statusText: 'ok'
        };
        axios.get.mockImplementation(() => Promise.resolve(linkObjStatus));// or axios.get.mockResolvedValue(linkObjStatus)
        return validateLinks(linkObj).then((result) => {//validate links returns a pending promise .then for resolve it
            expect(result).toEqual(linkObjStatus);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(link);
        });
    });

    test('Should return object with HTTP status 404 fail for not found link', () => {
        const link = 'https://github.com/Laboratoria/course-parsr';
        const linkObj = {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser'
        };
        const linkObjStatus = {
            path: '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md',
            href: 'https://github.com/Laboratoria/course-parsr',
            text: 'course-parser',
            status: 404,
            statusText: 'fail'
        };
        axios.get.mockImplementation(() => Promise.reject({response : {status : 404}})); //catch error.response of axios request
        return validateLinks(linkObj).then((result) => {
            expect(result).toEqual(linkObjStatus);
            expect(axios.get).toHaveBeenCalledTimes(2);
            expect(axios.get).toHaveBeenCalledWith(link);
        });
    });

    test('Should return object with Error message for failed HTTP petition of link', () => {
        const link = 'http://community.laboratoria.la/c/js';
        const linkTwo = '#2-resumen-del-proyecto';
        const linkObj = {
            path: '/home/gabri/CDMX013-md-links/example/exampleone.md',
            href: 'http://community.laboratoria.la/c/js',
            text: 'foro de la comunidad'
        };
        const linkObjTwo = {
            path: '/home/gabri/CDMX013-md-links/example/exampleone.md',
            href: '#2-resumen-del-proyecto',
            text: '2. Resumen del proyecto'
        };
        const linkObjStatus = {
            path: '/home/gabri/CDMX013-md-links/example/exampleone.md',
            href: 'http://community.laboratoria.la/c/js',
            text: 'foro de la comunidad',
            status: 'Error undefined',
            statusText: 'fail'
        };
        const linkObjTwoStatus = {
            path: '/home/gabri/CDMX013-md-links/example/exampleone.md',
            href: '#2-resumen-del-proyecto',
            text: '2. Resumen del proyecto',
            status: 'Error undefined',
            statusText: 'fail'
        };
        axios.get.mockImplementation(() => Promise.reject(linkObjTwoStatus));
        return validateLinks(linkObjTwo).then((result) => {
            expect(result).toEqual(linkObjTwoStatus);
            expect(axios.get).toHaveBeenCalledTimes(3);
            expect(axios.get).toHaveBeenCalledWith(linkTwo);

        })
    });
});