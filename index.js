console.clear();

const { Router } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const routes = require('./routes');
const router = routes(express.Router());
app.use(router);


app.listen(4000, () => console.log("Always watching.....   on port 4000"));