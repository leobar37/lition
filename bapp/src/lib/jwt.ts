import * as jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "secret";

const jwtSign = (payload: Record<string, any>) => {
  return jwt.sign(payload, SECRET, {
    expiresIn: "5h",
  });
};

const jwtVerify = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    console.log("error", e);

    return false;
  }
};

const decode = (
  token: string
): {
  id: number;
  bussinessId: number;
} | null => {
  return jwt.decode(token) as any;
};

export const jwtHandleStrategy = {
  sign: jwtSign,
  verify: jwtVerify,
  decode,
};
