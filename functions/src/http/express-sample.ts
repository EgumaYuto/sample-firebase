import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import { MyLogger } from "../util/MyLogger";

const logger = MyLogger.create("express-sample")

const router = express.Router();
router.get("/", (_req, res) => {
  logger.debug("GET /");
  logger.info("GET /");
  logger.warning("GET /");
  logger.error("GET /");
  logger.critical("GET /");
  res.json({path: "/"});
});
router.get("/path1", (_req, res) => {
  logger.info("GET /path1")
  res.json({path: "/path1"});
});
router.post("/message", async (req, res) => {
  logger.info("POST /message")
  const message = req.body.message
  const writeResult = await admin.firestore()
      .collection("message").add({original: message});
  res.json(writeResult)
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", router);

export const sample = functions.https.onRequest(app);
