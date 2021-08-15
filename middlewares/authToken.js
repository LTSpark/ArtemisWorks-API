const jwt = require('jsonwebtoken');

const { customErrorResponse } = require('../utils/responses');

//Auths token and puts user info on req.user
const authToken = async (req, res, next) => {

    const authHeader=req.header("Authorization");
    if(!authHeader){ return customErrorResponse(res,"User is not logged in",400);}
    if(!authHeader.startsWith("Bearer ",0)){ return customErrorResponse(res,"Bad authorization",400); }

    const token = authHeader.substring(7, authHeader.length);

    try {
        const { sub } = jwt.verify(token, process.env.SECRET_KEY);

        req.user = {
            user_id: sub.user_id,
            user_name: sub.user_name
        };

        next();
    } catch (error) {
        console.log(error);
        customErrorResponse(res, "Invalid token", 401);
    }

}

module.exports = { authToken };