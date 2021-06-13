const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const user = await User.find({ email: req.body.email }); //change later to callback
  if (user) {
    res.status(400).json({ message: "Email already in use" });
  }

  const hashPassword = bcrypt.hashSync(req.body.password, 10, (err, hash) => {
    if (err) res.json({ error: err });
    if (hash) {
      console.log(hash);
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
      res.json({ error });
      return;
    }
    if (user) res.json({ user });
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) res.json({error});
    if (user) {
      bcrypt.compare(req.body.password, user.password, (error, result) => {
        if (error) {
          console.log(error)
          res.status(400).json({ error })
        };
        if (result) {
          const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
          const jwtreturn = jwt.verify(token, process.env.JWT_SECRET)
          res.status(200).json({token})
        } else {
          res.status(400).json({message: "Invalid email/password"})
        };
      });
    } else res.status(400).json({message: error})
  });
};
