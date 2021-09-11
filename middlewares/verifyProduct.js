function verifyProduct(req, res, next) {
  const { name, price } = req.body;
  if (res.req.method === "DELETE") {
    next();
  } else {
    try {
      if (!name) {
        return res.status(400).json({
          status: 400,
          error: "name is required ",
        });
      }

      if (!price) {
        return res.status(400).json({
          status: 400,
          error: "price is required ",
        });
      }

      next();
    } catch (error) {
      let message = error.message;

      return res.status(500).json({
        status: 500,
        error: message,
      });
    }
  }
}

module.exports = verifyProduct;
