# nuxt-canonical

This package allows you to have canonicaltags automatically generated when generating static sites with nuxt. This helps you avoid SEO crawlers marking your non-www urls as duplicates, by telling them which of the two base urls is the "correct" one.

## Usage

nuxt.config.js

```javascript
...

modules: [
    ['nuxt-canonical', { baseUrl: 'https://my-non-www-base-url.io' }],
]

```

This will result in the following tag being inserted into all generated pages:

```html
<link rel="canonical" href="https://my-non-www-base-url.io/{{pageName}}" />
```

## Options

Available options besides the required baseUrl

```javascript
{
  trailingSlashes: true, // Adds trailing slashes to the href attribute urls, defaults to true
  forceLowercase: false // Forces lowercase href attribute urls, defaults to false
}
```
