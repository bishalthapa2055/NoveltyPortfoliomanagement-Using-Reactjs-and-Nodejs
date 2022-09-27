import express from "express";
const router = express.Router();
import {
  homeController,
  addController,
  displayController,
  singledisplayController,
  delController,
  putController,
} from "../controller/homecontroller.js";


router.get("/", homeController);
router.get("/display", displayController);
router.post("/add", addController);
router.get("/display/:StockName", singledisplayController);
router.delete("/delete/:StockName", delController);
router.put("/update/:StockName", putController);

export default router;
