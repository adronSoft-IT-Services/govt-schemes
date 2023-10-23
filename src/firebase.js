import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import AllFilters from "./app/filters";
// Authentication
const firebaseConfig = {
    apiKey: "AIzaSyBrq3jjo2GHP7FwsrDRwJp1m5G8s7rUhFk",
    authDomain: "govtschemes-e93e6.firebaseapp.com",
    projectId: "govtschemes-e93e6",
    storageBucket: "govtschemes-e93e6.appspot.com",
    messagingSenderId: "443125390412",
    appId: "1:443125390412:web:b5d14796b202593b9c28e9"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const fireStore = getFirestore(app);
// export default getFirestore(app)

async function getSchemes() {
    const q = query(collection(fireStore, "schemes"), where("isActive", "==", true));
    const schemesCollection = await getDocs(q);
    const allNewSchemes = [];
    schemesCollection.forEach((scheme) => {
        allNewSchemes.push(scheme);
    });
    return { schemes: allNewSchemes, filters: AllFilters };
    // setSchemes(allNewSchemes);
}
const getAllSchemes = getSchemes();

export { fireStore, getAllSchemes }