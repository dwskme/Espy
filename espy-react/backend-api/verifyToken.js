const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    // Just taking only token form the headers.
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is invalid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Unauthorized for the request");
  }
}
module.exports = verify;  
