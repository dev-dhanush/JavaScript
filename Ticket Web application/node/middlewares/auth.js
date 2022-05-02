const jwt = require('../utils/jwt')
const createError = require('http-errors');
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const auth = async (req,res,next) => {
    try{if(!req.headers.authorization){
        return next(createError.Unauthorized('Access toke is required'))
    }

    const token = req.headers.authorization.split(' ')[1]

    if(!token){
        return next(createError.Unauthorized('Token not found'))
    }

    await jwt.verifyAccessToken(token).then(user => {
        req.user = user
        next()
    }).catch(e => {
        next(createError.Unauthorized(e.message))
    })

    }catch(e){
        next(createError.Unauthorized(e.message))
    }


}

module.exports = auth;