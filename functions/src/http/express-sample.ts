import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";

const router = express.Router();
router.get("/", (_req, res) => {
  res.json({path: "/"});
});
router.get("/path1", (_req, res) => {
  res.json({path: "/path1"});
});
router.post("/message", async (req, res) => {
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
