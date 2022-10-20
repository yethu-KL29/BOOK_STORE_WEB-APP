const express= require("express");
const bookController = require("../conrollers/booksController");
const router=express.Router();


router.get("/",bookController.getAllBooks);
router.post("/",bookController.addBook);
router.get("/:id",bookController.getById);
router.put("/:id",bookController.Update);
router.delete("/:id",bookController.Delete);



module.exports = router;