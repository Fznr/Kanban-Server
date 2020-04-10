const {User}= require('../models')
const {decryptPassword} = require('../helper/bcrypt')
const {generateToken} =require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static signup(req, res, next) {
        const {email, password} = req.body
        let payload = {
            email,
            password
        }
        User.create(payload)
            .then(result => {
                let user = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(user)
                return res.status(201).json({
                    id: user.id,
                    email: user.email,
                    access_token: token
                })
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }
    static signin(req, res, next) {
        const {email, password} = req.body
        let payload = {
            email,
            password
        }
        User.findOne({
            where: {
                email: payload.email
            }
        })
            .then(result => {
                if(result) {
                    let compare = decryptPassword(payload.password,result.password)
                    if(compare) {
                        let user = {
                            id: result.id,
                            email: result.email
                        }
                        let token = generateToken(user)
                        res.status(200).json({
                            id: user.id,
                            email: user.email,
                            access_token: token
                        })
                    } else {
                        return next({
                            name: 'BadRequest',
                            errors: [{message: 'Invalid email or password'}]
                        })
                    }
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: [{message: 'Invalid email or password'}]
                    })
                }
            })
            .catch(err => {
                next({
                    name: 'InternalServerError',
                    errors: [{ message: err}]
                })
            })
    }
    static googleSign(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email=''
        console.log(req.body.id_token)
        client.verifyIdToken ({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                console.log(ticket)
                email= ticket.getPayload().email
                return User.findOne({
                    where: {
                        email:email
                    }
                })
            })
            .then(data => {
                if(data) {
                    let user = {
                        id: data.id,
                        email: data.email
                    }
                    let token = generateToken(user)
                    res.status(200).json({
                        id: user.id,
                        email: user.email,
                        access_token: token
                    })
                } else {
                    return User.create({
                        email:email,
                        password:'fancytodofauzanhehe'
                    })
                }
                })
            .then (data => {
                let user = {
                    id: data.id,
                    email: data.email
                }
                let token = generateToken(user)
                res.status(201).json({
                    id: user.id,
                    email: user.email,
                    access_token: token
                })
            })
        .catch(err => {
            next(err)
        })
    }
}

module.exports= UserController