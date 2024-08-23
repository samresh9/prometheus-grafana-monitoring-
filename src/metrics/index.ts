import { activeRequestsGauge } from "./activeRequests";
import { requestCounter } from "./requestCount";
import { httpRequestDurationMicroseconds } from "./requestDuration";
import { NextFunction, Request, Response } from "express";
export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();
  activeRequestsGauge.inc();
  res.on("finish", () => {
    const endTime = Date.now();
    const duration = endTime - startTime;

    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode,
    });

    httpRequestDurationMicroseconds.observe(
      {
        method: req.method,
        route: req.route ? req.route.path : req.path,
        code: res.statusCode,
      },
      duration
    );
    activeRequestsGauge.dec();
  });
  next();
};
