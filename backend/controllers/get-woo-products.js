const secrets = require("../secrets.js");
const { url, consumerKey, consumerSecret, version } = secrets;
const WooCommerceAPI = require("woocommerce-api");
const WooCommerce = new WooCommerceAPI({
  url: url,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  wpAPI: true,
  version: version,
});

exports.getWooProducts = (req, response, next) => {
  const { category, page } = req.headers;
  const productsUrl = `products?per_page=8&category=${category}&page=${page}`;
  try {
    WooCommerce.get(productsUrl, function (err, data, res) {
      response.json(JSON.parse(res));
    });
  } catch (err) {
    next(err);
    // console.log(err);
  }
};
