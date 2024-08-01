import { requestCounter } from "./requestCount";
import { NextFunction, Request, Response } from "express";
export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on("finish", () => {
    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode,
    });
  });
  next()
};
