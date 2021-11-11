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

exports.getWooCategories = (req, response, next) => {
  const productsUrl = `products/categories?per_page=100`;
  try {
    WooCommerce.get(productsUrl, function (err, data, res) {
      response.json(JSON.parse(res));
    });
  } catch (err) {
    next(err);
    // console.log(err);
  }
};
