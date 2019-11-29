const cheerio = require('cheerio')

export default function myModule(options) {
  this.nuxt.hook('generate:page', async page => {
    const $ = cheerio.load(page.html)
    let canonical = options.baseUrl + page.route

    $('head').append(`<link rel="canonical" href="${canonical}" />`)
    page.html = $.html()
  })
}

