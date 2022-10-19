const fs = require('fs');
const cheerio = require('cheerio');
const { marked } = require('marked');

const links = [];
let linkObj = {};

function getLinks (files){
    files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf8');
    const html = marked.parse(data);
    const $ = cheerio.load(html);
    $('a').each((i, element) => {
        const link = $(element).attr('href');
        const txt = $(element).text().length < 50 ? $(element).text() : $(element).text().slice(0,50);
        linkObj = {
            path: file,
            href: link,
            text: txt
        }
        links.push(linkObj);
        });
       console.log(links);
        return links;
    });
};

module.exports = getLinks;