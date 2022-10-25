const solvingPath = require('../lib/solving-path');

describe('function that returns path solved as absolute path', () => {
    
    test('receive a relative path and turn it into absolute path', () => {
        const pathForTest = solvingPath('example/exampleone.md');
        expect(pathForTest).toBe('/home/gabri/CDMX013-md-links/example/exampleone.md');
    });
    test('receive an absolute path an leave it as an absolute path', () => {
        const pathForTest = solvingPath('/home/gabri/CDMX013-md-links/example/exampleone.md');
        expect(pathForTest).toBe('/home/gabri/CDMX013-md-links/example/exampleone.md');
    })
});