const getLinks = require('../lib/get-links');

//suma 3 + 4 = 7 == 7
describe('test get links spec',()=>{
    const files = ['/home/gabri/CDMX013-md-links/example/exampletwo/examplefour.md']
    const linksExpect =  [
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
        }
      ];
    test('prueba',()=>{
        const links = getLinks(files)
        console.log(links)
        expect(links).toEqual(linksExpect)
    });
});