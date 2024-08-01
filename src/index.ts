import express from "express";
import client from "prom-client";
import { metricsMiddleware } from "./metrics";
import { requestCounter } from "./metrics/requestCount";
const app = express();
app.use(express.json());

const register = new client.Registry();
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({
  register,
});
register.registerMetric(requestCounter); 
app.use(metricsMiddleware);

app.get("/user", (req, res) => {
  res.send({
    name: "John",
    age: 25,
  });
});

app.get("/user-1", (req, res) => {
  res.send({
    name: "John Cena",
    age: 26,
  });
});

app.get("/metrics", async (req, res) => {
  let metrics = await register.metrics();
  res.setHeader("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
