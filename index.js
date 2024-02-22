const express = require('express');


const app = express();
const port = 3000;

app.use(express.json);
// app.use("/api/titres", require("./src/routes/titre.route"));
app.get('/test', (req, res) => {
    console.log('1');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
