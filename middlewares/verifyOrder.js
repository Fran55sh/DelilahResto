function verifyOrder(req, res, next) {
    const { status_id, date_time, total, pay_type_id } = req.body;
    const { order_product } = req.body

    try {
        if (!status_id) {
            return res.status(400).json({
                status: 400,
                error: 'status_id is required '
            });
        };

        if (!date_time) {
            return res.status(400).json({
                status: 400,
                error: 'date_time is required '
            });
        };

        if (!total) {
            return res.status(400).json({
                status: 400,
                error: 'total is required '
            });
        };

        if (!pay_type_id) {
            return res.status(400).json({
                status: 400,
                error: 'pay_type_id is required '
            });
        };

        if (!order_product) {
            return res.status(400).json({
                status: 400,
                error: 'products are required '
            });
        };

        let productsError = false;
        let productsErrorMessage = '';
        order_product.forEach(product => {
            const { product_id, amount, price } = product;

            if (!product_id) {
                productsError = true;
                productsErrorMessage = `product_id is required`;
                return;
            }

            if (!amount) {
                productsError = true;
                productsErrorMessage = `product_id ${product_id} amount is required`;
                return;
            }

            if (!price) {
                productsError = true;
                productsErrorMessage = `product_id ${product_id} price is required`;
                return;
            };
        });

        if (productsError) {
            return res.status(400).json({
                status: 400,
                error: productsErrorMessage
            });
        }

        next();

    } catch (error) {
        let message = error.message;

        return res.status(500).json({
            status: 500,
            error: message
        });
    }
}

module.exports = verifyOrder;