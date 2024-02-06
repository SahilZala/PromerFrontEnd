import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CategoryTrasaction from "./category_transaction";
import SizeTransaction from "./size_transaction";

export default class ProductTransaction {
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

    static async getAllProducts(){
        let finalData = [];
        const db = this.initializeFirestore();

        let mainCategory = await CategoryTrasaction.getMainandSubCategory();
        let productSize = await SizeTransaction.getProductSize();

        const products = await getDocs(collection(db,"Products"));

        products.docs.forEach((p) => finalData.push({
            productDetails: p.data().productDetails,
            productOrganization: p.data().productOrganization,
            productPricing: p.data().productPricing,
            productImages: p.data().productUrls,
            productVariant: {
                mainCategory : mainCategory.filter((m) => m.id === p.data().productVariant.mainCategory)[0],
                subCategory: mainCategory.filter((m) => m.id === p.data().productVariant.mainCategory)[0].subCategory.filter((s) => s.id === p.data().productVariant.subCategory)[0],
                size: productSize.filter((ps) => ps.id === p.data().productVariant.size)[0],
                color: p.data().productVariant.color,
                gender: p.data().productVariant.gender
            },
            activation: p.data().activation,
            id: p.data().id
        }))

        return await finalData;
    }

}