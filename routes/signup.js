const express = require('express');
const SignupController = require('../controller/signupController');

//Routes for User
const SignupRoutes = function(app)
{
    const router = express.Router();

router.route('/signup')
    .post(SignupController.create);

return router;

}

module.exports = SignupRoutes;