import { initializeApp } from "firebase/app";
import { doc, getFirestore,setDoc } from "firebase/firestore";

export default class ContactusTransaction {
    static firebaseConfig = {
        apiKey: "AIzaSyBwTpeuDlk8R23dwLM5vNNjS2GNvKoD5mc",
        authDomain: "miraclesstyle-1d805.firebaseapp.com",
        databaseURL: "https://miraclesstyle-1d805.firebaseio.com",
        projectId: "miraclesstyle-1d805",
        storageBucket: "miraclesstyle-1d805.appspot.com",
        messagingSenderId: "921887962765",
        appId: "1:921887962765:web:d4d19a6b47f9894d5e54c4",
        measurementId: "G-SQY6SWX7RV"
    };

    
    static initialize() {
        return initializeApp(this.firebaseConfig);
    }


    static initializeFirestore(){
        return getFirestore(this.initialize());
    }

    static async createContact(data){
        const db = this.initializeFirestore();
        var currentdate = new Date(); 
        
        var finaldata = {
            id: ""+new Date().valueOf(),
            username: data.username,
            emailAddress: data.emailAddress,
            query: data.query,
            data:  currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds(),

            activation: true
        };

        await setDoc(doc(db, "Contacts", finaldata.id), finaldata);
        return await finaldata;
    }

}