const liveServer = require('live-server');
const path = require('path');

const serverParams = {
    root: path.resolve('./'),
    port: 5555,
    open: true,
    logLevel: 2,
    file: 'index.html'
};

//Start the server server
liveServer.start(serverParams);
