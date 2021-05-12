const express = require('express');
const app = express();
require("../Server/config/mongoose.config");
const port = 9000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

const MyRoutes = require ("../Server/routes/jokes.routes");
MyRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );