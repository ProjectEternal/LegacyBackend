//Globals
global.BaseDir = __dirname;
global.config = {}
global.bIsLocal = true; //TODO: Check if its local ig

const express = require('express')
const server = express();
const PORT = (bIsLocal) ? (config.port || 5555) : process.env.PORT

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//TODO: Loop through folder instead
require('./Server/Routes/account')(server)
require('./Server/Routes/cloudstorage')(server)
require('./Server/Routes/fortnite')(server)
require('./Server/Routes/friends')(server)
require('./Server/Routes/lightswitch')(server)
require('./Server/Routes/misc')(server)
require('./Server/Routes/oauth')(server)
require('./Server/Routes/profile')(server)

server.all("/*", (req, res) => {
    console.log(`Unhandled Request ${req.method} ${req.path}`);

    res.sendStatus(404);
})

server.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
    //Bot, DB, Etc
})