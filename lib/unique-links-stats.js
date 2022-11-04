function uniqueLinks(linksOfMd){
    const links = [...new Set(linksOfMd.map((link) => link.href))].length;
    return links;
}

module.exports= uniqueLinks;