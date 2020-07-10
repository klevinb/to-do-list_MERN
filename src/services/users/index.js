const express = require("express")
const userCtrl = require("../utilitis")

const router = express.Router()


router.get("/", userCtrl.getAllUsers)
router.get("/:id", userCtrl.getUserById)
router.post("/", userCtrl.addNewUser)
router.post("/:id/addToDoAtUser", userCtrl.addToDoAtUser)
router.put("/:id", userCtrl.editUserById)
router.delete("/:id", userCtrl.deleteUserById)


module.exports = router