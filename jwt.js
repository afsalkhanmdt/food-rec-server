const jwt = require('jsonwebtoken');
const key = "mypassword";

const generateToken = (username)=>{
    return jwt.sign({ username }, key,{ expiresIn: 60*60 });
}

const verifyToken = (token)=>{
    try{
        return jwt.verify(token,key);
    }catch(_err){
        return false
    }
}

module.exports = {
    generateToken,
    verifyToken
}