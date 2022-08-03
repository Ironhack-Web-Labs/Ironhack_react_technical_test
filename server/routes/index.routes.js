const phones = require('./../data/phones.json')

const router = require("express").Router();


router.get("/phones", (req, res, next) => {
  setTimeout(() => {
    const allPhones = phones.map(phone => {
      const { name, description, id, imageFileName } = phone
      console.log(phone)
      return ({ name, description, id, imageFileName })
    })
    res.json(allPhones);
  }, 2000)
});

router.get("/phones/:id", (req, res, next) => {
  setTimeout(() => {
    const { id } = req.params
    console.log(id)

    const phone = phones.find(phone => phone.id == id)
    res.json(phone);
  }, 2000)
});


module.exports = router;
