const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  User.find({ email: req.body.email }).exec((error, user) => {
    if (error) res.json({ error });
    if (user) {
      res.status(400).json({ message: "Email already in use" });
    } else {
      const hashPassword = bcrypt.hashSync(req.body.password, 10, (err, hash) => {
        console.log('hash')
        if (err) res.json({ error: err });
        if (hash) {
          return hash;
        }
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
    
      newUser.save((error, user) => {
        console.log('save')
        if (error) {
          res.json({ error });
        }
        if (user) {
          res.json({ meaasage: "signup seccessful" });
        }
        res.json({ message: "something went wrong" });
      });
    }
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) res.json({ error });
    if (user) {
      bcrypt.compare(req.body.password, user.password, (error, result) => {
        if (error) {
          console.log(error);
          res.status(400).json({ error });
        }
        if (result) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          const jwtreturn = jwt.verify(token, process.env.JWT_SECRET);
          res.status(200).json({ token });
        } else {
          res.status(400).json({ message: "Invalid email/password" });
        }
      });
    } else res.status(400).json({ message: error });
  });
};
