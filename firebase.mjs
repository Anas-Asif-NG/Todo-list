import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJ6j2IgGV6qXDac_WPBXdrBSyngpVzO2I",
    authDomain: "projects-9a494.firebaseapp.com",
    projectId: "projects-9a494",
    storageBucket: "projects-9a494.firebasestorage.app",
    messagingSenderId: "719844513643",
    appId: "1:719844513643:web:e1e5c6b6988c335aef1e2e",
    measurementId: "G-PQZKDTGRV9"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);