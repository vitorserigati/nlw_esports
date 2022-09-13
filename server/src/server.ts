import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, nome: "Anuncio1" },
    { id: 2, nome: "Anuncio2" },
    { id: 3, nome: "Anuncio3" },
    { id: 4, nome: "Anuncio4" },
    { id: 5, nome: "Anuncio5" },
  ]);
});

app.listen(3333);
