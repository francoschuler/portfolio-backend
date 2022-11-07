const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();
const port = 3001;

server.db = router.db;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `http://localhost:${port}`)
    res.header('Access-Control-Allow-Headers', '*')
    next()
  })
server.use(auth);
server.use(middlewares);
server.use(router);


server.listen(port);