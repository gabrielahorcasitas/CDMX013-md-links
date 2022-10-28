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
        return validateLinks(linkObj).then((result) => {
            expect(result).toEqual(linkObjStatus);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(link);
        });
    });


});