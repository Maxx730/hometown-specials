import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from '@env';
import Firestore from './Firebase';
import { getDocs, getDoc, collection, doc, } from '@firebase/firestore';

export async function GetLocations() {
    const _locationsCol = collection(Firestore, 'locations');
    const _snapshot = await getDocs(_locationsCol);
    const _locations = _snapshot.docs.map(doc => {
        const _data = {
            id: doc.id,
            data: doc.data()
        };
        return _data;
    });
    return _locations;
}

export async function GetLocation(location) {
    const _ref = doc(Firestore, "locations", location.id);
    const _snap = await getDoc(_ref);
    
    if (_snap.exists()) {
        return _snap.data();
    } else {
        console.log("Document does not exist.");
        return false;
    }
}