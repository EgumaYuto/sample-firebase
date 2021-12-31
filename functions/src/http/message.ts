import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const getMessages = functions.https.onRequest(async (_req, res) => {
  const getResult = (await admin.firestore().collection("message").get()).docs;
  res.json({ result: getResult });
});

export const addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  const writeResult = await admin
    .firestore()
    .collection("message")
    .add({ original: original });
  res.json({ result: `Message with ID; ${writeResult.id} added.` });
});
