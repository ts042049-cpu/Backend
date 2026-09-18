import http from 'http';

const server = http.createServer((req, res) => {
    // if(req.url === '/' && req.method === 'GET') {
    //     res.end("<h1 style='color: blue;'>Welcome to the Home Page</h1>");
    // }else if(req.url === '/about' && req.method === 'GET') {
    //     res.end("<h1 style='color: green;'>Welcome to the About Page</h1>");
    // }else if(req.url === '/contact' && req.method === 'GET') {
    //     res.end("<h1 style='color: red;'>Welcome to the Contact Page</h1>" + "\n" + JSON.stringify({ email: 'example@example.com' }));
    // }
    let body = '';
    if(req.url === "/user" && req.method === 'POST') {
        req.on('data', (chunk) => {
            body = body + chunk
        });
        req.on('end', () => {
            body = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User created successfully', success: true, body }));
            console.log(body);
        });
    }
});

let operation = process.argv[2]
let n1 = Number(process.argv[3])
let n2 = Number(process.argv[4])

if(operation === 'add'){
    console.log(n1 + n2);
}else if(operation === 'sub'){
    console.log(n1 - n2);
}

const PORT = 3000; 

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:3000/`);
});
