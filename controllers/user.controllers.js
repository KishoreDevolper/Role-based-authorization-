const address = require("../models/address.model")
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("Welocme User");
  };
  exports.adminBoard =  (req, res) => {
      const addadress = new address({
              user_id:req.body.id,
             address:req.body.address
      })
      let final = addadress.save()
      res.status(200).send(final);
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Hello moderator");
  };

