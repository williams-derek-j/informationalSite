import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    console.log('incoming request...')

    res.setHeader('Content-Type', 'text/html')

    let path = './views'

    switch(req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200
            break
        case '/about':
            path += '/about.html'
            res.statusCode = 200
            break
        case '/contact-me':
            path += '/contact-me.html';
            res.statusCode = 200;
            break
        default:
            path += '/404.html';
            res.statusCode = 404;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error)
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('server listening on 3000... ')
});

