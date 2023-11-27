import * as bcrypt from "bcrypt";

const SALT = 10;
export const passwordHandleStrategy = {
  encrypt: async (password: string) => {
    return await bcrypt.hash(password, SALT);
  },
  compare: async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
  },
};
