const http = require('http');
const fs = require('fs');
const os = require('os');

// Configuración del servidor
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/alumno') {
    // Ruta /alumno
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Nombre del alumno: Gabriel Agüero, Comisión: dwn4av');
  } else if (req.url === '/info') {
    // Ruta /info
    const info = {
      platform: os.platform(),
      release: os.release(),
      architecture: os.arch(),
      cpus: os.cpus().length,
      memory: os.totalmem(),
      uptime: os.uptime(),
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info, null, 2)); // Convertimos el objeto en cadena de texto JSON
  } else if (req.url === '/static') {
    // Ruta /static
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar el archivo');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Ruta no encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
