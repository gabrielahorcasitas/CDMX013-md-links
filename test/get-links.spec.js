const { default: axios } = require('axios');
const getLinks = require('../lib/get-links');
/*no hace falta hacer un mock de marked ni cheerio ya que están 
importadas de forma implícita en mi función getLinks*/
jest.mock("axios");

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

    test('Should return an array of objects for each link data(path, href and text)',()=>{
        const links = getLinks(files)
        expect(links).toEqual(linksExpect)
    });
});