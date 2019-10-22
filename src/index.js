const secrets = require('./secrets.js')

const secretKey = secrets.get("SECRET_KEY") || process.env.SECRET_KEY

console.log("hello world:" + secretKey)
