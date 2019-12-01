const _ = require("lodash");
const cheerio = require("cheerio");

export default function myModule(options) {
  _.defaults(options, {
    trailingSlashes: true
  });

  this.nuxt.hook("generate:page", async page => {
    const $ = cheerio.load(page.html);
    let canonical = options.baseUrl + page.route;

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
