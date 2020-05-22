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
            try {
                authService.verifyUser(token, (err, decoded) => {
                    if (err) {
                        console.log('shareFunction line 35');
                        console.log(err)
                        res.status(400).send(err);
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
                            console.log('shareFunction line 50');
                            console.log(err)
                            res.status(500).send(err)
                        });
                    }
                });//end verify auth user function
            } catch (err) {
                console.log(err)
                res.status(400).send(err)
            }
        } else {
            res.status(401).send('Must be logged in');
        }
    }
}
