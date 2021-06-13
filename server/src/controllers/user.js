const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res) => {
  const user = await User.find({email: req.body.email});
  if(user){
    res.status(400).json({message: "Email already in use"});
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
    if (error) res.json({ error });
    if (user) res.json({ user });
  });
};
