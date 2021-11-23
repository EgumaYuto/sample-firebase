import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as httpMessage from "./http/message";
import * as httpExpressSample from "./http/express-sample";
import * as triggerMessage from "./trigger/message";

admin.initializeApp();

export {
  httpMessage,
  httpExpressSample,
  triggerMessage,
};

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({message: "Hello from Firebase!"});
});
