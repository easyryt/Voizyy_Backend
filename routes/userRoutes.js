const express = require("express")
const { signUp } = require("../controllers/userCtrl")

const router = express.Router()


router.route("/signUp").post(signUp)


module.exports =  router