# Solar App

> This is an Example of a Progressive Web app (Google) that displays solar data pertaining to aurora strength that is retrieved from the National Oceanic and Atmospheric Administration.
The project can be viewed at  [solar.sherriff.kiwi](https://solar.sherriff.kiwi/)

> This has been developed from the vue.js PWA template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Special Notes
* To build you will need a file called ```private\secrects.json``` which has the structure:
```
{
  "googleMapsKey": "<keyGoesHere>"
}

```

For detailed explanation on how vue.js things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
