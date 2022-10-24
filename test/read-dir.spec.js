const { example } = require('yargs');
const readDir = require('../lib/read-dir');

describe('Recursive function that should enter directory until finding file', () => {
    test('It should return markdown files found following path', () => {
        const mdFiles = [];
        const examplePath = '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree';
        readDir(examplePath, mdFiles);
        expect(mdFiles).toEqual(['/home/gabri/CDMX013-md-links/example/exampletwo/examplethree/examplefive.md',
        '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree/examplesix.md']);
    });
    test('It shouldn\'t return the path of a directory', () => {
        const mdFiles = [];
        const examplePath = '/home/gabri/CDMX013-md-links/example/exampletwo/examplethree';
        readDir(examplePath, mdFiles);
        expect(mdFiles).not.toEqual(examplePath);
    });
    test('It shouldn\'t save files that aren\'t markdown files', () => {
        const mdFiles = [];
        const notMdFile = ['/home/gabri/CDMX013-md-links/example/exampletwo/example.html'];
        const examplePath = '/home/gabri/CDMX013-md-links/example/exampletwo';
        readDir(examplePath, mdFiles);
        expect(mdFiles).toEqual(expect.not.arrayContaining(notMdFile));
    });
}); 