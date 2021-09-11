const userModel = require('../models/userModel');
const { Op } = require('sequelize');


async function verifyUser(req, res, next) {

    const { user_name, email, phone, address, password } = req.body;

    if (!user_name && req.route.path === '/user') {
        return res.status(400).json({
            status: 400,
            error: 'User is required '
        });
    };


    if (!user_name) {
        return res.status(400).json({
            status: 400,
            error: 'Name is required '
        });
    }

    if (!email && req.route.path === '/user') {
        return res.status(400).json({
            status: 400,
            error: 'Email is required '
        });
    }

    if (!phone) {
        return res.status(400).json({
            status: 400,
            error: 'Phone is required '
        });
    }

    if (!address) {
        return res.status(400).json({
            status: 400,
            error: 'Address is required '
        });
    }

    if (!password) {
        return res.status(400).json({
            status: 400,
            error: 'Password is required '
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            status: 400,
            error: 'Password has to be bigger than 6 characters'
        });
    }

    if (req.route.path != '/user') {
        return next();
    }

    try {
        const user = await userModel.findAll(
            {
                where: {
                    [Op.or]: [
                        { user_name },
                        { email }
                    ]
                }
            }
        );

        if (user.length > 0) {

            return res.status(409).json({
                status: 409,
                error: 'user or email already exists'
            });
        };

        next();

    } catch (error) {

        return res.status(500).json({
            status: 500,
            error: error.message
        });
    }
}

module.exports = { verifyUser };