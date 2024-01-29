const express = require('express');
const { PORT } = require('./config/.env');

const {HomeRoutes, QuoteRoutes} = require('./routes/routes')
const {NotFoundMiddleware} = require('./middlewares/index');

const server = express();

/**
 * Middlewares
 */
//will put on use static file, from the path provided
server.use(express.static('./public'));

//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
server.use(express.json());
server.use('/', HomeRoutes);
server.use('/', QuoteRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Server is alive at ${PORT}`);
});