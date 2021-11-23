import * as functions from "firebase-functions";
import * as express from "express";

const router = express.Router();
router.get("/", (_req, res) => {
  res.json({path: "/"});
});
router.get("/path1", (_req, res) => {
  res.json({path: "/path1"});
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", router);

export const sample = functions.https.onRequest(app);
