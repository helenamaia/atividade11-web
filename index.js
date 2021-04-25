const http = require("http");

const hostname = "localhost";
const port = 3000;
const port1 = "sobre";
const port2 = "contato";
const port3 = "whatsapp";

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`Ola! Seja bem vindo.`);
    }else if(request.url === '/sobre'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`Nome: Empresa Estrela Rua: Estradas dos brilhos Numero:1000 Bairro: jardim dos bolinhos de arroz`);
    }else if(request.url === '/contato/whatsapp'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`chame no (41)XXXXX-XXXX`);
    }else{
        console.log(request.url);
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end(`Not Found`);
    }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});