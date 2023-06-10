import crypto from "crypto";

export const authentication = (salt: string, password: string): string => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.API_JWT_SECRET) // API_JWT_SECRET
    .digest("hex");
};

export const random = () => crypto.randomBytes(128).toString("base64");
