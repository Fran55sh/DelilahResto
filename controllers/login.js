const config = require('../config');
const userModels = require('../models/userModel');
const jwt = require('jsonwebtoken')


async function login(req, res) {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
        return res.status(401).json({
            status: 401,
            error: 'Invalid username or password.'
        });
    };

    try {
        const user = await userModels.findOne(
            {
                where: {
                    user_name,
                    password
                },
                attributes: {
                    exclude: ['password']
                }
            }
        );

        if (!user) {
            return res.status(401).json({
                status: 401,
                error: 'Invalid username or password.'
            });
        };

        const token = jwt.sign({
            user: {
                user_id: user.id,
                is_admin: user.is_admin
            }
        }, config.jwt_secret);

        return res.json({
            status: 200,
            token: token,
            data: user,
            message: "login success"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error
        });
    };

};

module.exports = { login };
