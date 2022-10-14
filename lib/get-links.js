const fs = require('fs');
const cheerio = require('cheerio');
const { marked } = require('marked');

const links = [];
let linkObj = {};

function getLinks (files){
    files.forEach((file) => {
        fs.readFile(file, 'utf8',(err, data) => {
            if (err){
                console.log(err);
                return err;
            } else {
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
            }
        }); 
    });
};

//need to check if each link is repeated
module.exports = getLinks;