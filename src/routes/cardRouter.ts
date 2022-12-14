import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { authValidationMiddleware } from "../middlewares/authValidationMiddleware.js";
import * as cardController from "../controllers/cardController.js";
import * as cardSchemas from "../schemas/cardSchemas.js";

const router = Router();

router.post(
  "/newcards/:employeeid",
  authValidationMiddleware,
  middleware(cardSchemas.addCardSchema),
  cardController.newCard
);
router.put(
  "/activatecards/:cardid",
  middleware(cardSchemas.activateCardSchema),
  cardController.activateCard
);

router.get(
  "/viewcards/:cardid",
  middleware(cardSchemas.viewCardSchema),
  cardController.viewCard
);

router.get("/viewtransactions/:cardid", cardController.viewTransactions);

router.put(
  "/blockcards/:cardid",
  middleware(cardSchemas.viewCardSchema),
  cardController.blockCard
);

router.put(
  "/unblockcards/:cardid",
  middleware(cardSchemas.viewCardSchema),
  cardController.unblockCard
);

export default router;
