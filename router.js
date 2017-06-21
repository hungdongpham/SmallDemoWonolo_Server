const Authentication  = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
    app.get('/', requireAuth, function(req,res){
        console.log(req);
        res.send({message: 'Welcome you logged in Wonolo website successfully.' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}