/*
  authMiddleware: verify JWT from Authorization header (Bearer token)
  -> set req.user = { id, role, ... }
*/
module.exports = function authMiddleware(req, res, next){
  // TODO: implement JWT verification
  next();
};
