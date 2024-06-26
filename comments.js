// Create web server 
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the comments page
// 5. Create a route for the 404 page
// 6. Start the web server

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 2. Create a route for the home page
    if (req.url === '/' || req.url === '/home') {
        fs.readFile(`${__dirname}/public/index.html`, 'utf-8