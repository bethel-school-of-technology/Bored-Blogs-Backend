const authService = require('../services/auth'); //<--- Add authentication service
const Users = require('../models').Users;

//also could be movet elsewhere
//TODO: rewrite this the normal way
//needs tooken in headers:{auth:tpken}
module.exports = {
    //lambda is jacobism
    authenticateAdmin(req, res, lambda) {
        this.authenticateUser(req, res, user => {
            if (user.isAdmin) {
                return lambda(req, res, user);
            } else res.status('403').send('user is not an admin');
        });
    },
    authenticateUser(req, res, lambda) {
        let token = req.headers.auth;
        if (token != null) {
            //when token expires bad things happen
            authService.verifyUser(token, (err, decoded) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                } else {
                    //console.log(decoded)
                    Users.findOne({
                        where: {
                            id: decoded.UserId
                        }
                    }).then(
                        user => {
                            return lambda(req, res, user);
                        }
                    ).catch(function (err) {
                        // handle error;
                        console.log(err)
                        res.status(500)
                        res.send(err)
                    });
                }
            });//end verify auth user function
        } else {
            res.status(401);
            res.send('Must be logged in');
        }
    }
}
