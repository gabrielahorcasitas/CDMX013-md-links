const readFile = require('../lib/read-file');

describe('It should return markdown files found following path', () => {
    test('It should save in array file.md', () => {
        mdFiles = [];
        pathExample = '/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md';
        readFile(pathExample, mdFiles);
        expect(mdFiles).toEqual(['/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md']);
    });
    test('It should save in array file.markdown', () => {
        mdFiles = [];
        pathExample = '/home/gabri/CDMX013-md-links/example/exampletwo/example.markdown';
        readFile(pathExample, mdFiles);
        expect(mdFiles).toEqual(['/home/gabri/CDMX013-md-links/example/exampletwo/example.markdown']);
    });
    test('It shouldn\'t save non markdown files', () => {
        mdFiles = [];
        notMdFile = ['/home/gabri/CDMX013-md-links/example/exampletwo/example.html']
        pathExample = '/home/gabri/CDMX013-md-links/example/exampletwo/example.html';
        readFile(pathExample, mdFiles);
        expect(mdFiles).toEqual(expect.not.arrayContaining(notMdFile));
    });
});