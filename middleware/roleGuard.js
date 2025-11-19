/*
  roleGuard: permit(...roles) => middleware
*/
module.exports = function permit(...allowed){
  return (req, res, next) => {
    // TODO: check req.user.role
    next();
  };
};
