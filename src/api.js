import { db } from './firebase'

export function get(collectionName) {
    const collection = db.collection(collectionName);
    return (query = () => collection) => {
        return query(collection)
            .get()
            .then(snapshot => {

                const todos = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                return todos;
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });
    }
}

export function add(collectionName, data, cb) {
    // Add a new document with a generated id.
    db.collection(collectionName).add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            cb();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            cb();
        });

}
