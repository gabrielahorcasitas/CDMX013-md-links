const fs = require('fs');
const cheerio = require('cheerio');
const { marked } = require('marked');

function getLinks (files){

    const links = [];
    let linkObj = {};

    files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf8');
    const html = marked.parse(data);//.replace(/<a href="#\d+-\D+">d+. \D+<\/a>/g, "#Titles replaced");
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
    });
    return links;
};

module.exports = getLinks;