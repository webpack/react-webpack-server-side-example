# react-webpack-server-side-example

Example of an react application with webpack including server-side rendering.

This is not for the normal user. This example is meant as inspiration to develop an framework that can do server-side rendering of react with webpack. You shouldn't use the code, only the idea.

## Overview

webpack compile with two separate configurations: One for the browser bundle and one for the react application for server-side rendering. The server-side bundle can be required in other node.js code to build the pre-rendered HTML.

## Features

* Same react code (`app/Application.js`) run on server and on client
* In both cases the code is compiled with webpack
  * Supports loaders i. e. file-loader for assets
* The server-side compilation collects styles and include them in the pre-rendered HTML
  * This avoids FOUC of the pre-rendered HTML
* browser build includes a hash in url for caching

## Usage

``` text
npm start
```

Run the 2 steps:

1. Compile the browser bundle and the server-side bundle. It also stores stats from the browser bundle as json file.
2. Starts a server. The server requires the server-side bundle, which generates HTML for every request. It also reads the filename of the browser bundle to insert the `<script>`-tag.

### Production

``` text
npm run production
```

This compiles production versions for the browser and server-side bundles. It also minimizes javascript and css.

## License

None. Don't copy the code, only use the idea.

Copyright 2014 Tobias Koppers