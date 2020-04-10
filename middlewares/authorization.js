const {Task} = require('../models')

function authorization(req, res, next) {
    console.log(req.params.id)
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            if(result) {
                console.log(result.UserId)
                if(result.UserId == req.currentUserId){
                    return next()
                } else {
                    return res.status(401).json({
                        name:'Unauthorized',
                        errors:'Unauthorized'
                    })
                }
            } else {
                return res.status(404).json({
                    name:'NotFound',
                    errors:'Task Not Found'
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                name: 'InternalServerError',
                errors: err
            })
        })
}

module.exports= authorization