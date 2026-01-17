
const router = require("express").Router();
const {createCustomer,getCustomers} = require("../controllers/customerController");
const auth = require("../middleware/authMiddleware");

router.use(auth);
router.post("/",createCustomer);
router.get("/",getCustomers);

module.exports = router;
