const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyAccessToken = (token: string) => {
  const secret = JWT_SECRET;

  const decoded = jwt.verify(token, secret);
  return { success: true, data: decoded };
};

export const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token is required." });
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    return res.status(403).json({ error: result });
  }

  req.user = result.data;
  next();
};
