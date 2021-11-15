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

exports.postWooOrder = (req, response, next) => {
  const { order_holder, shipping_address, line_items, shipping_lines } =
    req.body;
  const ordersUrl = `orders`;
  try {
    if (order_holder && shipping_address && line_items && shipping_lines) {
      WooCommerce.post(
        ordersUrl,
        {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: false,
          status: "on-hold",
          billing: order_holder,
          shipping: shipping_address,
          line_items: line_items,
          shipping_lines: shipping_lines,
        },
        function (err, data, res) {
          response.json(JSON.parse(res));
        }
      );
    } else {
      const hint =
        "request body is required for new order, for example billing, shipping and items..";
      response.send(hint);
    }
  } catch (err) {
    next(err);
    // console.log(err);
  }
};
