const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const App = require('./transpiled/App.js').default;
const { renderToString } = require('react-dom/server');

const server = express();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname, 'build', 'index.html');

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    const rootElem = '<div id="root">';
    const renderedApp = renderToString(React.createElement(App, null));

    res.send(html.replace(rootElem, rootElem + renderedApp));
  });
});

server.use(express.static('build'));

const port = process.env.PORT || 8888;
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});