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
            if (typeof cb === 'function') cb();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            if (typeof cb === 'function') cb();
        });
}

export function erase(collectionName, id, cb) {
    db.collection(collectionName).doc(id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
            if (typeof cb === 'function') cb();
        }).catch((error) => {
            console.error("Error removing document: ", error);
            if (typeof cb === 'function') cb();
        });
}

export function update(collectionName, id, data, cb) {
    db.collection(collectionName)
        .doc(id)
        .set(data, { merge: true })
        .then(() => {
            console.log("Document successfully updated!");
            if (typeof cb === 'function') cb();
        }).catch((error) => {
            console.error("Error removing document: ", error);
            if (typeof cb === 'function') cb();
        });
}