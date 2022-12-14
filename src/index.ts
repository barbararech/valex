import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import cardRouter from "./routes/cardRouter.js";
import rechargeRouter from "./routes/rechargeRouter.js";
import paymentRouter from "./routes/paymentRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(cardRouter);
app.use(rechargeRouter);
app.use(paymentRouter);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server On!"));
