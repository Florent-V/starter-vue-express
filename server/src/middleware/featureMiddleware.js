import Feature from "../models/featureModel.js";

export const setEntity = (req, res, next) => {
  req.entity = Feature;
  next();
}
