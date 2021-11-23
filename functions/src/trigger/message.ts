import * as functions from "firebase-functions";

export const makeUppercase = functions.firestore
    .document("/message/{documentId}")
    .onCreate((snap, context) => {
      const original = snap.data().original;
      functions.logger.log("Uppercasing", context.params.documentId, original);
      const uppercase = original.toUpperCase();
      return snap.ref.set({uppercase}, {merge: true});
    });

export const failureTrigger = functions.firestore
    .document("/message/{documentId}")
    .onCreate(() => {
      throw Error("必ず失敗するテストトリガーです");
    });
