const path = require('path');
const express = require('express');
const http = require('http');
const app = require('./app');

const isDev = process.env.NODE_ENV === 'development';
const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost: ${app.get('port')}/`);
});
