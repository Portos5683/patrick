const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
