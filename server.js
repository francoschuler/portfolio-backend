const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.db = router.db;

// Set up a domainList and check against it:
const domainList = ['http://localhost:3000', 'https://portfolio-mockbackend.herokuapp.com']

const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

// Then pass them to cors:
server.use(cors(corsOptions));
server.use(auth);
server.use(middlewares);
server.use(router);


server.listen(port);