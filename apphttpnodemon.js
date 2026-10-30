const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Cambie el contenido del servidornpm");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});