// authMiddleware.js

// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

// function verifyToken(req, res, next) {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(401).send('Unauthorized');
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).send('Unauthorized');
//   }
// }

// module.exports = { verifyToken };



const jwt = require("jsonwebtoken");
const KEY = "RECIPE"


const auth=async(req,res,next)=>{

    const token=req.headers.authorization.split(' ')[1];

    // const token=req.params.id;
    if(token){
        try {
            req.userID = jwt.verify(token, KEY);
            next();
        } catch (error) {
            return res.status(400).json({
                message:"Invalid Token"
            })
        }
    }else{
        return res.status(400).json({
            message:"User not SignIn!"
        })
    }
}

module.exports = auth;