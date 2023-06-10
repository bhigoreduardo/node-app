import express from "express";

import authentication from "./auth.route";
import user from "./user.route";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  user(router);

  return router;
};
