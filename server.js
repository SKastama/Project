const express = require("express");
const cors = require('cors');
const port = 8000;
const app = express();
require("./server/config/mongoose.config");
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/routes/pet.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));