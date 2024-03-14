const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.create);
router.get("/:title", itemController.findOne);
router.delete("/:id", itemController.delete);
router.put("/:id", itemController.update);
module.exports = router;
