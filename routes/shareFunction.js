const authService = require('../services/auth'); //<--- Add authentication service
const Models = require('../models');
//also could be move it elsewhere
//TODO: rewrite this the normal way
//needs token in headers:{auth:token}
module.exports = {
    //to be used with sequel join
    //
    authorDataIncludes: [
        {
            model: Models.Users,
            as: 'author',
            //we only want these field we shouldnt be giving away our hashed passwords
            attributes: [
                'firstName',
                'lastName',
            ]
        }
    ],
    contribDataIncludes: [
        {
            model: Models.Style,
            attributes: [
                'background-color',
                'color',
            ],
        },
        {
            model: Models.Bio,
            include: [
                { model: Models.Games },
                { model: Models.OtherWork },
            ]
        },
    ],
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
                        Models.Users.findOne({
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
    },
    defaultErr(err, res) {
        // handle error;
        res.status(500);
        res.send(err.toString());
    },
    lowerCaseKey(object, key) {

    },
}
