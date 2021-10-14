const unirest = require("unirest");
const crypto = require("crypto");

const sendOtp = async(mobileNumber) =>{

    const otp = crypto.randomInt(1000,9999);
    const req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
    req.headers({
    "authorization": "MqzPwSXOInQoacjrvd5fK6kFubygW4ih9UNY8A1BJZL3GxHtsDbOFU2QqJY0TmSsijwolMIe94fv7K1H"
    });
    req.form({
    "variables_values": otp+"",
    "route": "otp",
    "numbers": mobileNumber,
    });

    const res = await req.end();
    if (res.error) {
        throw new Error(res.error);
    }
    return {status: true, otp };
}

module.exports = {
    sendOtp
}