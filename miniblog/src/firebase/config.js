import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbWyoSWiTdX-ehWh_IwmnTtiwcBIFSusg",
  authDomain: "miniblog-5bb98.firebaseapp.com",
  projectId: "miniblog-5bb98",
  storageBucket: "miniblog-5bb98.appspot.com",
  messagingSenderId: "653590021310",
  appId: "1:653590021310:web:3e7f5690d531172eca8aef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }