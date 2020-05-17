const authService = require('../services/auth'); //<--- Add authentication service
const Users = require('../models').Users;

//also could be movet elsewhere
//TODO: rewrite this the normal way
//needs token in headers:{auth:token}
module.exports = {
    //to be used with sequel join
    //
    authorDataFilter: {
        model: Users,
        as: 'author',
        //we only want these field we shouldnt be giving away our hashed passwords
        attributes: [
            'firstName',
            'lastName',
            'bio',
            'style',
        ]
    },
    //lambda is jacobism
    authenticateAdmin(req, res, lambda) {
        this.authenticateUser(req, res, user => {
            if (user.isAdmin) {
                return lambda(user);
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
                            return lambda(user);
                        }
                    ).catch(function (err) {
                        // handle error;
                        console.log(err)
                        res.status(500).send(err)
                    });
                }
            });//end verify auth user function
        } else {
            res.status(401).send('Must be logged in');
        }
    }
}
