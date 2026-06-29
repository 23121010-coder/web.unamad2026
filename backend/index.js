const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

// Ruta de prueba
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: "¡Hola desde el backend con Node y Express!" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});