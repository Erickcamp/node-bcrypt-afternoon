module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      res.status(401).send("Please login nerd");
    } else {
      next();
    }
  },
  adminsOnly: (req, res, next) => {
    if (!req.session.user.isAdmin) {
      res.status(403).send("YOU ARE FORBIDEN!");
    }
    console.log(req.session);
    next();
  },
};
