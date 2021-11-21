import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const getMessages = functions.https.onRequest(async (req, res) => {
  const getResult = (await admin.firestore()
      .collection("message").get()).docs;
  res.json({result: getResult});
});
