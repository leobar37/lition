import * as jwt from "jsonwebtoken";

const SECRET = "secret";

const jwtSign = (payload: Record<string, any>) => {
  return jwt.sign(payload, SECRET, {
    expiresIn: "5h",
  });
};

const jwtVerify = (token: string) => {
  return jwt.verify(token, SECRET);
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
