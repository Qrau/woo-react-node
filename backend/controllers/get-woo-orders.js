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

exports.getWooOrders = (req, response, next) => {
  const { customer } = req.headers;
  const ordersUrl = `orders?customer=${customer}`;
  try {
    WooCommerce.get(ordersUrl, function (err, data, res) {
      response.json(JSON.parse(res));
    });
  } catch (err) {
    next(err);
    // console.log(err);
  }
};
