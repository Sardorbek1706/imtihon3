module.exports = function permit(...allowed){
  return (req, res, next) => {
    next();
  };
};
