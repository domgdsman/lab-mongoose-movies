const express = require("express");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebArrayFromDb => {
      console.log("Retrieved celebrities from DB:", celebArrayFromDb);
      res.render("celebrities/index"); // { celebArrayFromDb }
    })
    .catch(error => {
      console.log("Error while getting the celebrities from the DB: ", error);
    });
});
