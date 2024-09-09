import { productSchema, updateProductSchema } from "../joiSchema/productJoiSchema.js";
import _ from 'lodash';
import BadRequestError from "../error/badRequestError.js";
import ForbiddenError from '../error/forbiddenError.js';

// Middleware pour vérifier l'accès à un produit
export const authorizeProductAccess = async (req, res, next) => {
  try {
    if (req.product.userId !== req.user.id) {
      throw new ForbiddenError('Access denied: You do not have permission to access this product');
    }
    res.data = req.product;
    next();
  } catch (error) {
    return next(error);
  }
};

export const setEntity = async (req, res, next) => {
  req.entity = Product;
  next();
};

export const setCreateValidator = async (req, res, next) => {
  req.schema = productSchema;
  next();
}

export const setUpdateValidator = async (req, res, next) => {
  req.schema = updateProductSchema;
  next();
}