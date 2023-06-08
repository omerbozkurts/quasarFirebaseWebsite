import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyDuaOgtUq1CKjYX6CXmVj6ypbHu8F1bKEI",
  authDomain: "quasarfinal.firebaseapp.com",
  projectId: "quasarfinal",
  storageBucket: "quasarfinal.appspot.com",
  messagingSenderId: "1048674802406",
  appId: "1:1048674802406:web:60eb93a11e556807d8b927",
  measurementId: "G-JG5HTYZRJH",
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;

  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
