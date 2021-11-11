const { getWooProducts } = require("../controllers/get-woo-products");
const { getWooCategories } = require("../controllers/get-woo-categories");
const router = require("express").Router();

router.get("/products", getWooProducts);
router.get("/categories", getWooCategories);

module.exports = router;
