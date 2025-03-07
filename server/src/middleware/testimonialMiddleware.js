import Testimonial from "../models/testimonialModel.js";

export const setEntity = (req, res, next) => {
  req.entity = Testimonial;
  next();
}
