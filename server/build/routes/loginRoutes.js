"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var requireAuth_1 = require("../middlewares/requireAuth");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <div>You are logged in</div>\n      <a href=\"/logout\">Logout</a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>You are not logged in</div>\n      <a href=\"/auth/login\">Login</a>\n    </div>\n    ");
    }
});
router.get('/protected', requireAuth_1.requireAuth, function (req, res) {
    res.send('Welcome to proteected Route.Your Password and email information');
});
