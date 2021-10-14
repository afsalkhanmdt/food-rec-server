const bcrypt = require('bcrypt');

const generateHash = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

const verifyPassword = async(password,hash)=>{
    const isPasswordMatch = await bcrypt.compare(password,hash);
    return isPasswordMatch;
}

module.exports = {
    generateHash,
    verifyPassword
}