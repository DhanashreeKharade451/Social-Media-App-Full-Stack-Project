import jwt from "jsonwebtoken";

const secret = process.env.JWTSECRET;

export async function authMiddleware(req, res, next) {
  try {
    const token = req.header.authorization;

    //check if tehre is token
    if (!token) {
      return res.status(403).json({ message: "no token provider" });
    }

    token = token.split("").pop().trim();

    //verify token
    const { data } = jwt.verify(token, secret);

    //
    req.user = data;

    next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
}
