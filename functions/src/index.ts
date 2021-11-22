import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as message from "./http/message";

admin.initializeApp();

export {
  message,
};

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({message: "Hello from Firebase!"});
});

export const makeUppercase = functions.firestore
    .document("/message/{documentId}")
    .onCreate((snap, context) => {
      const original = snap.data().original;
      functions.logger.log("Uppercasing", context.params.documentId, original);
      const uppercase = original.toUpperCase();
      return snap.ref.set({uppercase}, {merge: true});
    });
