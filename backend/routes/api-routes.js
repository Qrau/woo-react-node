const { getWooProducts } = require("../controllers/get-woo-products");
const { getWooCategories } = require("../controllers/get-woo-categories");
const { getWooOrders } = require("../controllers/get-woo-orders");
const { postWooOrder } = require("../controllers/post-woo-order");
const router = require("express").Router();

router.get("/products", getWooProducts);
router.get("/categories", getWooCategories);
router.get("/orders", getWooOrders);
router.post("/new-order", postWooOrder);

module.exports = router;
