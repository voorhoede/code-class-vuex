
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            resolve(e.target.result);
        }

        request.onerror = (e) => {
            reject(e);
        }
    });
}

class Api {
    constructor() {
        this.init = new Promise((resolve, reject) => {
            const request = window.indexedDB.open('groceries', 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                db.createObjectStore('groceries', { keyPath: 'id', autoIncrement: true });
            }

            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve(this.db);
            }
        });
    }

    load() {
        return this.init
            .then(db => {
                const objectStore = db.transaction(['groceries'], 'readonly').objectStore('groceries');
                return promisifyRequest(objectStore.getAll());
            });
    }

    addItem(item) {
        return this.init
            .then(db => {
                const objectStore = db.transaction(['groceries'], 'readwrite').objectStore('groceries');
                return promisifyRequest(objectStore.put(item));
            })
    }

    deleteItem(id) {
        return this.init
            .then(db => {
                const objectStore = this.db.transaction(['groceries'], 'readwrite').objectStore('groceries');
                return promisifyRequest(objectStore.delete(id));
            });
    }
}

export default new Api();