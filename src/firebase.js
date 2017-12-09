import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-AUTH-DOMAIN",
  databaseURL: "YOUR-DATABASE-URL",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-STORAGE-BUCKET",
  messagingSenderId: "YOUR-MESSAGING-ID"
});

export const db = app.database();
export const namesRef = db.ref('names');
