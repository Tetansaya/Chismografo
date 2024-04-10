const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001; // Puerto para el servidor

app.use(express.json());

// Ruta para manejar la creación de un nuevo post
app.post('/api/posts', (req, res) => {
  const { title, content, user } = req.body;
  const date = new Date().toLocaleString();
  const newPost = { id: Date.now(), title, content, user, date };

  // Guardar el post en el archivo PosTi.json
  fs.readFile('PosTi.json', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo PosTi.json:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    const posts = JSON.parse(data);
    posts.push(newPost);

    fs.writeFile('PosTi.json', JSON.stringify(posts), (err) => {
      if (err) {
        console.error('Error al escribir en el archivo PosTi.json:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
    });
  });

  // Guardar el post en el archivo PostTi.txt
  const txtContent = `${title}\n${content}\n\n`;
  fs.appendFile('PostTi.txt', txtContent, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo PostTi.txt:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
  });

  res.status(201).json(newPost);
});

// Ruta para obtener todos los posts
app.get('/api/posts', (req, res) => {
  fs.readFile('PosTi.json', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo PosTi.json:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    const posts = JSON.parse(data);
    res.json(posts);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
