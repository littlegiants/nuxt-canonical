const _ = require("lodash");
const cheerio = require("cheerio");

export default function myModule(options) {
  _.defaults(options, {
    trailingSlashes: true,
    forceLowercase: false
  });

  this.nuxt.hook("generate:page", async page => {
    const $ = cheerio.load(page.html);
    let canonical = '';
    
    if (
      page.route === '/' &&
      options.trailingSlashes !== true
    ) {
      canonical = options.baseUrl;
    } else {
      const route = options.forceLowercase ? page.route.toLowerCase() : page.route;
      canonical = options.baseUrl + route;
    }

    if (
      options.trailingSlashes == true &&
      canonical[canonical.length - 1] != "/"
    ) {
      canonical += "/";
    }

    $("head").append(`<link rel="canonical" href="${canonical}" />`);
    page.html = $.html();
  });
}
