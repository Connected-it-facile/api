var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
router.post('/user', user.create);

/*
 * Routes that can be accessed only by autheticated users
 */
 router.get('/api/v1/users', user.getAll);
 router.get('/api/v1/user/:id', user.getOne);
 router.put('/api/v1/user/:id', user.update);
 router.delete('/api/v1/user/:id', user.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */


module.exports = router;
