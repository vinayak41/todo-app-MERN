const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) res.json({ error });
    if (user) {
      res.status(409).json({ message: "Email already in use" });
    } else {
      const hashPassword = bcrypt.hashSync(req.body.password, 10, (err, hash) => {
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
        if (error) {
          console.log(error)
        }
        if (user) {
          res.status(200).json({ meaasage: "signup seccessful" });
        }
      });
    }
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      res.status(400).json({ error });
      return;
    };
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
          res.status(200).json({ token });
        } else {
          res.status(400).json({ error: "Invalid email or password" });
        }
      });
    } else res.status(400).json({ error: "Invalid email or password" });
  });
};

exports.getUser = (req, res) => {
  User.findOne({_id: req.userId}).exec((error, user) => {
    if(error) {
      res.status(400).json({error});
      return;
    }
    if(user) {
      res.status(200).json({user : {
        name: user.name,
        userId: user._id,
        email: user.email
      }});
    } else {
      res.status(400).json({error: "Invalid user"});
    }
  })
}
