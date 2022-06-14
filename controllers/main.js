const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors');
require('dotenv');

const login = (req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        throw new BadRequestError('Please provide email and password');
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:`user created`,token});
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    console.log(req.user);
    res.status(200).json({msg:`hello ${req.user.username}`, secret:`here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,dashboard
}