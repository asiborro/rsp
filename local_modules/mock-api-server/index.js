/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
/* eslint-enable */
const articlesMock = require('./mocks/articles');

const api = express();
const PORT = 8089;
const defaultCorsConfig = {
  allowedMethods: ['GET,PUT,POST,PATCH'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  allowedOrigins: ['http://localhost:8080']
};

const corsMiddleware = (config = defaultCorsConfig) => (req, res, next) => {
  if (Object.prototype.hasOwnProperty.call(req.headers, 'origin')) {
    const { allowedMethods, allowedHeaders, allowedOrigins } = config;
    if (allowedOrigins.indexOf(req.headers.origin.toLowerCase()) > -1) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Methods', allowedMethods);
      res.setHeader('Access-Control-Allow-Headers', allowedHeaders);
      res.setHeader('Access-Control-Max-Age', 3600);
    }
    if (req.method === 'OPTIONS') {
      res.end();
      return;
    }
  }
  next();
};

api.use(corsMiddleware());

api.get('/', (req, res) => {
  res.json({ msg: 'Hello World' });
});

api.get('/articles', (req, res) => {
  res.json(articlesMock);
});

api.listen(PORT, () => {
  console.log(`API listening on port: ${PORT}`);
});
