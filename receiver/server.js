
let express = require('express');
let compression = require('compression');
let cors = require('cors');

let zfs = require('./routers/zfs');

let server = express();

server.use(compression());
server.use(cors());
server.use('/zfs', zfs);
server.listen('8089');
