import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyBB7JDzI0S-LdF8a_3F9a5uZzblSL2vsz8",
  authDomain: "quasargithub.firebaseapp.com",
  projectId: "quasargithub",
  storageBucket: "quasargithub.appspot.com",
  messagingSenderId: "644417494894",
  appId: "1:644417494894:web:5887a69d8225132c9eeb7f",
  measurementId: "G-R8894LB1SW",
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;

  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
