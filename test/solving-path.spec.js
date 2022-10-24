const { italic } = require('colors');
const { testElement } = require('domutils');
const solvingPath = require('../lib/solving-path');

describre('function that returns path solved as absolute path'), () => {
    test('receive a relative path and turn it into absolute path'), () => {
        const pathForTest = 'example/exampleone.md';
        expect(pathForTest).toBe('/home/gabri/CDMX013-md-links/example/exampleone.md');
    }
}