//middlewarew para verificar input de nombre de usuario y contraseña

function verifyUserInputs(req, res, next) {
  const { user_name, password } = req.body;
  if (!user_name || !password) {
    return res
      .status(400)
      .json({ status: 400, error: "name and password are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({
        status: 400,
        error: "Password has to be bigger than 6 characters",
      });
  }
  next();
}
