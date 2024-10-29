const express = require('express');


const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Nombre: Gabriel Agüero');
});

app.get('/materia', (req, res) => {
  res.send('Materia: Aplicaciones Híbridas');
});

app.get('/profesor', (req, res) => {
  res.send('Profesora: Camila Belén Marcos Galban');
});

app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

const peliculas = ['El viaje de chihiro', 'Bastardos sin gloria', 'Perfect Blue', 'The Batman', 'Control'];

app.get('/peliculas/:nombre', (req, res) => {
  const nombrePelicula = req.params.nombre;
  if (peliculas.includes(nombrePelicula)) {
    res.send('La película seleccionada ya está en favoritos');
  } else {
    res.status(404).send('Película no encontrada');
  }
});

const productos = [
  { id: 1, nombre: 'Blue Lock', precio: 6500 },
  { id: 2, nombre: 'Blue Period', precio: 6900 },
  { id: 3, nombre: 'Chainsaw Man', precio: 6500 },
  { id: 4, nombre: 'Death Note', precio: 6500 },
  { id: 5, nombre: 'Hells Paradise', precio: 6500 },
  { id: 6, nombre: 'Hellsing', precio: 8000 },
  { id: 7, nombre: 'Monster', precio: 16000 },
  { id: 8, nombre: 'Naruto', precio: 8000 },
  { id: 9, nombre: 'Uzumaki', precio: 16000 },
  { id: 10, nombre: 'Vagabond', precio: 6800 }
];

app.get('/productos', (req, res) => {
  const { id, min, max } = req.query;
  if (id) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) {
      return res.json(producto);
    } else {
      return res.status(404).send('Producto no encontrado');
    }
  }

  let productosFiltrados = productos;

  if (min) {
    productosFiltrados = productosFiltrados.filter(p => p.precio >= parseInt(min));
  }

  if (max) {
    productosFiltrados = productosFiltrados.filter(p => p.precio <= parseInt(max));
  }

  res.json(productosFiltrados);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

