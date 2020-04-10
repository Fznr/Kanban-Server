const {Task} = require('../models')

class TaskController {
    static findAll(req, res) {
        Task.findAll()
            .then(result => {
                res.status(200).json({Task:result})
            })
            .catch(err => res.status(500).json(err))
    }
    static findByPk(req, res) {
        const {id} =req.params
        Task.findByPk(id)
            .then(result => {
                if(result) {
                    let output = []
                    output.push(result)
                    res.status(200).json({Task:output})
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }
            })
            .catch(err => res.status(500).json(err))
    }
    static create(req, res) {
        const {title, category} =req.body
        Task.create({
            title : title,
            category: category,
            UserId: req.currentUserId
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError' ) {
                    res.status(400).json(err)
                } else {
                    res.status(500).json(err)
                }
            })
    }
    static update(req, res) {
        let idEdit = req.params.id
        const {title, category} =req.body
        Task.update({
            title : title,
            category: category
        }, {
            where: {
            id: idEdit
            }
        })
            .then((result) => {
                // console.log(result)
                if(result != 0) {
                    let output= [{
                    title : title,
                    category:category
                    }]
                    res.status(200).json({Task:output})
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError' ) {
                    res.status(400).json(err)
                } else {
                    res.status(500).json(err)
                }
            })
    }
    static updateColumn(req, res) {
        let idEdit = req.params.id
        const {title, category} =req.body
        Task.update({
            category: category
        }, {
            where: {
            id: idEdit
            }
        })
            .then((result) => {
                console.log(result)
                if(result != 0) {
                    let output= [{
                    title : title,
                    category:category
                    }]
                    res.status(200).json({Task:output})
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError' ) {
                    res.status(400).json(err)
                } else {
                    res.status(500).json(err)
                }
            })
    }
    static delete(req, res) {
        const {id} = req.params
        Task.findByPk(id)
            .then(result => {
                if(result) {
                    Task.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then(() => {
                        let output = []
                        output.push(result)
                        res.status(200).json({Task:output})
                    })
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }   
            })
            .catch(err => res.status(500).json(err))
        }
}

module.exports = TaskController