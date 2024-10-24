const express = require('express');
const app = express();
const port = 3000;

// Lista simulada de usuarios
const usuarios = [
    { id: 1, nombre: 'Kevin', email: 'kevin@example.com' },
    { id: 2, nombre: 'Ana', email: 'ana@example.com' },
    { id: 3, nombre: 'Luis', email: 'luis@example.com' }
];

// Ruta para devolver la lista de usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
