import * as functions from "firebase-functions";
import * as express from "express";
import * as datadog from "connect-datadog"

const router = express.Router();
router.get("/", (_req, res) => {
  res.json({path: "/"});
});
router.get("/path1", (_req, res) => {
  res.json({path: "/path1"});
});
router.get("/failure", () => {
  throw Error("必ず失敗するエンドポイントです");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(datadog({
    "response_code":true,
    "tags": ["app:my_app"]
}))
app.use("/", router);

export const sample = functions.https.onRequest(app);
